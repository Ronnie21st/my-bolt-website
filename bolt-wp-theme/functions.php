<?php
/**
 * Bolt Theme functions and definitions
 *
 * @package Bolt_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'BOLT_THEME_VERSION', '1.0.0' );
define( 'BOLT_THEME_DIR', get_template_directory() );
define( 'BOLT_THEME_URI', get_template_directory_uri() );

/**
 * Theme Setup
 */
function bolt_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'automatic-feed-links' );

    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    add_theme_support( 'custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    add_theme_support( 'custom-background' );
    add_theme_support( 'customize-selective-refresh-widgets' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'editor-styles' );
    add_theme_support( 'wp-block-styles' );

    register_nav_menus( array(
        'primary'      => esc_html__( 'Primary Menu', 'bolt-theme' ),
        'footer-1'     => esc_html__( 'Footer Menu 1', 'bolt-theme' ),
        'footer-2'     => esc_html__( 'Footer Menu 2', 'bolt-theme' ),
        'footer-legal' => esc_html__( 'Footer Legal Menu', 'bolt-theme' ),
        'social'       => esc_html__( 'Social Links', 'bolt-theme' ),
    ) );

    add_image_size( 'bolt-featured', 1200, 675, true );
    add_image_size( 'bolt-thumbnail', 600, 400, true );
    add_image_size( 'bolt-large', 1920, 1080, true );
}
add_action( 'after_setup_theme', 'bolt_theme_setup' );

/**
 * Content Width
 */
function bolt_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'bolt_content_width', 1200 );
}
add_action( 'after_setup_theme', 'bolt_content_width', 0 );

/**
 * Enqueue Scripts and Styles - IN CORRECT LOADING ORDER
 */
function bolt_enqueue_scripts() {
    // Main theme stylesheet (with theme header info)
    wp_enqueue_style( 'bolt-style', get_stylesheet_uri(), array(), BOLT_THEME_VERSION );

    // Compiled main CSS from Bolt (includes Tailwind)
    wp_enqueue_style( 'bolt-main-css', BOLT_THEME_URI . '/css/main.css', array( 'bolt-style' ), BOLT_THEME_VERSION );

    // Animations CSS
    wp_enqueue_style( 'bolt-animations-css', BOLT_THEME_URI . '/css/animations.css', array( 'bolt-main-css' ), BOLT_THEME_VERSION );

    // Navigation CSS
    wp_enqueue_style( 'bolt-navigation-css', BOLT_THEME_URI . '/css/navigation.css', array( 'bolt-main-css' ), BOLT_THEME_VERSION );

    // Footer CSS
    wp_enqueue_style( 'bolt-footer-css', BOLT_THEME_URI . '/css/footer.css', array( 'bolt-main-css' ), BOLT_THEME_VERSION );

    // Main JavaScript from Bolt (compiled React bundle) - MUST LOAD FIRST
    wp_enqueue_script( 'bolt-main-js', BOLT_THEME_URI . '/js/main.js', array(), BOLT_THEME_VERSION, true );

    // Navigation JavaScript - depends on main.js
    wp_enqueue_script( 'bolt-navigation-js', BOLT_THEME_URI . '/js/navigation.js', array( 'bolt-main-js' ), BOLT_THEME_VERSION, true );

    // Animations JavaScript - depends on main.js
    wp_enqueue_script( 'bolt-animations-js', BOLT_THEME_URI . '/js/animations.js', array( 'bolt-main-js' ), BOLT_THEME_VERSION, true );

    // Comment reply script
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }

    // Localize script for AJAX
    wp_localize_script( 'bolt-main-js', 'boltTheme', array(
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'bolt_nonce' ),
        'themeUrl' => BOLT_THEME_URI,
    ) );
}
add_action( 'wp_enqueue_scripts', 'bolt_enqueue_scripts' );

/**
 * Elementor Compatibility
 */
function bolt_register_elementor_locations( $elementor_theme_manager ) {
    $elementor_theme_manager->register_all_core_location();
}
add_action( 'elementor/theme/register_locations', 'bolt_register_elementor_locations' );

function bolt_add_elementor_support() {
    add_theme_support( 'elementor' );
    add_post_type_support( 'page', 'elementor' );
    add_post_type_support( 'post', 'elementor' );
}
add_action( 'after_setup_theme', 'bolt_add_elementor_support' );

// Ensure Elementor uses theme styles
add_action( 'elementor/frontend/after_enqueue_styles', function() {
    wp_enqueue_style( 'bolt-elementor-compat', BOLT_THEME_URI . '/css/main.css', array(), BOLT_THEME_VERSION );
} );

/**
 * Customizer Settings
 */
function bolt_customize_register( $wp_customize ) {
    // Contact Information Section
    $wp_customize->add_section( 'bolt_contact_info', array(
        'title'    => __( 'Contact Information', 'bolt-theme' ),
        'priority' => 30,
    ) );

    // Phone
    $wp_customize->add_setting( 'bolt_phone', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'refresh',
    ) );

    $wp_customize->add_control( 'bolt_phone', array(
        'label'   => __( 'Phone Number', 'bolt-theme' ),
        'section' => 'bolt_contact_info',
        'type'    => 'text',
    ) );

    // Email
    $wp_customize->add_setting( 'bolt_email', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_email',
        'transport'         => 'refresh',
    ) );

    $wp_customize->add_control( 'bolt_email', array(
        'label'   => __( 'Email Address', 'bolt-theme' ),
        'section' => 'bolt_contact_info',
        'type'    => 'email',
    ) );

    // Address
    $wp_customize->add_setting( 'bolt_address', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_textarea_field',
        'transport'         => 'refresh',
    ) );

    $wp_customize->add_control( 'bolt_address', array(
        'label'   => __( 'Address', 'bolt-theme' ),
        'section' => 'bolt_contact_info',
        'type'    => 'textarea',
    ) );
}
add_action( 'customize_register', 'bolt_customize_register' );

/**
 * Widget Areas
 */
function bolt_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Sidebar', 'bolt-theme' ),
        'id'            => 'sidebar-1',
        'description'   => esc_html__( 'Add widgets here.', 'bolt-theme' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    // Footer widget areas
    for ( $i = 1; $i <= 4; $i++ ) {
        register_sidebar( array(
            'name'          => sprintf( esc_html__( 'Footer Widget Area %d', 'bolt-theme' ), $i ),
            'id'            => 'footer-' . $i,
            'description'   => sprintf( esc_html__( 'Footer widget area %d', 'bolt-theme' ), $i ),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h4 class="widget-title">',
            'after_title'   => '</h4>',
        ) );
    }
}
add_action( 'widgets_init', 'bolt_widgets_init' );

/**
 * Excerpt Length
 */
function bolt_excerpt_length( $length ) {
    return 30;
}
add_filter( 'excerpt_length', 'bolt_excerpt_length' );

/**
 * Excerpt More
 */
function bolt_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'bolt_excerpt_more' );

/**
 * Body Classes
 */
function bolt_body_classes( $classes ) {
    if ( ! is_singular() ) {
        $classes[] = 'hfeed';
    }

    if ( is_page_template( 'template-elementor-full-width.php' ) ) {
        $classes[] = 'elementor-full-width';
    }

    if ( is_page_template( 'template-elementor-canvas.php' ) ) {
        $classes[] = 'elementor-canvas';
    }

    if ( is_front_page() ) {
        $classes[] = 'front-page';
    }

    return $classes;
}
add_filter( 'body_class', 'bolt_body_classes' );

/**
 * Pingback Header
 */
function bolt_pingback_header() {
    if ( is_singular() && pings_open() ) {
        printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
    }
}
add_action( 'wp_head', 'bolt_pingback_header' );

/**
 * Add async/defer to scripts
 */
function bolt_add_async_defer_attributes( $tag, $handle ) {
    $async_scripts = array( 'bolt-animations-js' );
    $defer_scripts = array( 'bolt-navigation-js' );

    if ( in_array( $handle, $async_scripts ) ) {
        return str_replace( ' src', ' async src', $tag );
    }

    if ( in_array( $handle, $defer_scripts ) ) {
        return str_replace( ' src', ' defer src', $tag );
    }

    return $tag;
}
add_filter( 'script_loader_tag', 'bolt_add_async_defer_attributes', 10, 2 );

/**
 * Remove inline styles that might conflict
 */
function bolt_remove_wp_block_library_css() {
    if ( ! is_admin() ) {
        wp_dequeue_style( 'wp-block-library' );
        wp_dequeue_style( 'wp-block-library-theme' );
        wp_dequeue_style( 'wc-block-style' );
        wp_dequeue_style( 'global-styles' );
    }
}
add_action( 'wp_enqueue_scripts', 'bolt_remove_wp_block_library_css', 100 );

/**
 * Optimize WordPress
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );
