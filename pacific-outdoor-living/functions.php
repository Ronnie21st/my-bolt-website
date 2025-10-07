<?php
/**
 * Pacific Outdoor Living Functions
 *
 * @package Pacific_Outdoor_Living
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'PACIFIC_VERSION', '1.0.0' );

/**
 * Theme Setup
 */
function pacific_setup() {
    // Add default posts and comments RSS feed links
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage document title
    add_theme_support( 'title-tag' );

    // Enable Post Thumbnails
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 1200, 675, true );

    // Register Navigation Menus
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'pacific-outdoor' ),
        'footer'  => __( 'Footer Menu', 'pacific-outdoor' ),
    ) );

    // HTML5 Markup
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Selective Refresh for Widgets
    add_theme_support( 'customize-selective-refresh-widgets' );

    // Custom Logo
    add_theme_support( 'custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // Responsive Embeds
    add_theme_support( 'responsive-embeds' );

    // Wide Alignment
    add_theme_support( 'align-wide' );

    // Editor Styles
    add_theme_support( 'editor-styles' );

    // WP Block Styles
    add_theme_support( 'wp-block-styles' );

    // Custom Background
    add_theme_support( 'custom-background', array(
        'default-color' => 'faf8f5',
    ) );

    // Elementor Support
    add_theme_support( 'elementor' );
}
add_action( 'after_setup_theme', 'pacific_setup' );

/**
 * Content Width
 */
function pacific_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'pacific_content_width', 1200 );
}
add_action( 'after_setup_theme', 'pacific_content_width', 0 );

/**
 * Enqueue Styles and Scripts
 */
function pacific_enqueue_scripts() {
    // Main stylesheet
    wp_enqueue_style( 'pacific-style', get_stylesheet_uri(), array(), PACIFIC_VERSION );

    // Compiled CSS (includes all TailwindCSS)
    if ( file_exists( get_template_directory() . '/css/compiled.css' ) ) {
        wp_enqueue_style(
            'pacific-compiled',
            get_template_directory_uri() . '/css/compiled.css',
            array( 'pacific-style' ),
            PACIFIC_VERSION
        );
    }

    // Compiled JavaScript (includes React components)
    if ( file_exists( get_template_directory() . '/js/compiled.js' ) ) {
        wp_enqueue_script(
            'pacific-compiled-js',
            get_template_directory_uri() . '/js/compiled.js',
            array(),
            PACIFIC_VERSION,
            true
        );

        // Localize script
        wp_localize_script( 'pacific-compiled-js', 'pacificTheme', array(
            'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
            'nonce'      => wp_create_nonce( 'pacific_nonce' ),
            'themeUrl'   => get_template_directory_uri(),
            'siteUrl'    => home_url( '/' ),
            'siteName'   => get_bloginfo( 'name' ),
            'siteTagline'=> get_bloginfo( 'description' ),
        ) );
    }

    // Comment reply
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'pacific_enqueue_scripts' );

/**
 * Register Widget Areas
 */
function pacific_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Sidebar', 'pacific-outdoor' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Add widgets here.', 'pacific-outdoor' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer', 'pacific-outdoor' ),
        'id'            => 'footer-1',
        'description'   => __( 'Footer widget area.', 'pacific-outdoor' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'pacific_widgets_init' );

/**
 * Customizer Settings
 */
function pacific_customize_register( $wp_customize ) {
    // Contact Info Section
    $wp_customize->add_section( 'pacific_contact', array(
        'title'    => __( 'Contact Information', 'pacific-outdoor' ),
        'priority' => 30,
    ) );

    // Phone
    $wp_customize->add_setting( 'pacific_phone', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'pacific_phone', array(
        'label'   => __( 'Phone Number', 'pacific-outdoor' ),
        'section' => 'pacific_contact',
        'type'    => 'text',
    ) );

    // Email
    $wp_customize->add_setting( 'pacific_email', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_email',
    ) );
    $wp_customize->add_control( 'pacific_email', array(
        'label'   => __( 'Email Address', 'pacific-outdoor' ),
        'section' => 'pacific_contact',
        'type'    => 'email',
    ) );

    // Address
    $wp_customize->add_setting( 'pacific_address', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'pacific_address', array(
        'label'   => __( 'Address', 'pacific-outdoor' ),
        'section' => 'pacific_contact',
        'type'    => 'textarea',
    ) );
}
add_action( 'customize_register', 'pacific_customize_register' );

/**
 * Excerpt Length
 */
function pacific_excerpt_length( $length ) {
    return 30;
}
add_filter( 'excerpt_length', 'pacific_excerpt_length', 999 );

/**
 * Excerpt More
 */
function pacific_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'pacific_excerpt_more' );

/**
 * Body Classes
 */
function pacific_body_classes( $classes ) {
    if ( ! is_singular() ) {
        $classes[] = 'hfeed';
    }

    if ( is_front_page() ) {
        $classes[] = 'home-page';
    }

    return $classes;
}
add_filter( 'body_class', 'pacific_body_classes' );

/**
 * Pingback Header
 */
function pacific_pingback_header() {
    if ( is_singular() && pings_open() ) {
        printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
    }
}
add_action( 'wp_head', 'pacific_pingback_header' );

/**
 * Clean up WordPress head
 */
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );
