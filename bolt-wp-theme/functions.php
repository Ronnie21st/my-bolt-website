<?php
/**
 * Bolt Theme Functions and Definitions
 *
 * @package Bolt_Theme
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'BOLT_VERSION', '1.0.0' );
define( 'BOLT_THEME_DIR', get_template_directory() );
define( 'BOLT_THEME_URI', get_template_directory_uri() );

/**
 * Theme Setup
 */
function bolt_theme_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 1200, 675, true );
    add_image_size( 'bolt-featured', 1200, 675, true );
    add_image_size( 'bolt-large', 1920, 1080, false );
    add_image_size( 'bolt-thumbnail', 600, 400, true );

    // Register navigation menus
    register_nav_menus( array(
        'primary' => esc_html__( 'Primary Menu', 'bolt-theme' ),
        'footer'  => esc_html__( 'Footer Menu', 'bolt-theme' ),
    ) );

    // Switch default core markup to output valid HTML5
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Add theme support for selective refresh for widgets
    add_theme_support( 'customize-selective-refresh-widgets' );

    // Add support for custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // Add support for responsive embeds
    add_theme_support( 'responsive-embeds' );

    // Add support for wide alignment
    add_theme_support( 'align-wide' );

    // Add support for editor styles
    add_theme_support( 'editor-styles' );

    // Add support for WP block styles
    add_theme_support( 'wp-block-styles' );

    // Add support for custom background
    add_theme_support( 'custom-background', array(
        'default-color' => 'faf8f5',
    ) );
}
add_action( 'after_setup_theme', 'bolt_theme_setup' );

/**
 * Set content width
 */
function bolt_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'bolt_content_width', 1200 );
}
add_action( 'after_setup_theme', 'bolt_content_width', 0 );

/**
 * Enqueue Scripts and Styles - IN CORRECT ORDER
 */
function bolt_enqueue_scripts() {
    // Main theme stylesheet
    wp_enqueue_style( 'bolt-style', get_stylesheet_uri(), array(), BOLT_VERSION );

    // Compiled CSS (includes all Tailwind styles)
    wp_enqueue_style( 'bolt-compiled', BOLT_THEME_URI . '/css/compiled.css', array( 'bolt-style' ), BOLT_VERSION, 'all' );

    // Theme color overrides (MUST load after compiled.css to fix blue colors)
    wp_enqueue_style( 'bolt-colors', BOLT_THEME_URI . '/css/theme-colors.css', array( 'bolt-compiled' ), BOLT_VERSION, 'all' );

    // Compiled JavaScript (includes all React components and functionality)
    wp_enqueue_script( 'bolt-compiled-js', BOLT_THEME_URI . '/js/compiled.js', array(), BOLT_VERSION, true );

    // Color fix script (MUST load after compiled.js to override blue colors)
    wp_enqueue_script( 'bolt-color-fix', BOLT_THEME_URI . '/js/color-fix.js', array( 'bolt-compiled-js' ), BOLT_VERSION, true );

    // Comment reply script
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }

    // Localize script for AJAX and theme data
    wp_localize_script( 'bolt-compiled-js', 'boltTheme', array(
        'ajaxUrl'  => admin_url( 'admin-ajax.php' ),
        'nonce'    => wp_create_nonce( 'bolt_nonce' ),
        'themeUrl' => BOLT_THEME_URI,
        'siteUrl'  => home_url( '/' ),
    ) );
}
add_action( 'wp_enqueue_scripts', 'bolt_enqueue_scripts' );

/**
 * Register Widget Areas
 */
function bolt_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Sidebar', 'bolt-theme' ),
        'id'            => 'sidebar-1',
        'description'   => esc_html__( 'Add widgets here to appear in your sidebar.', 'bolt-theme' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Footer 1', 'bolt-theme' ),
        'id'            => 'footer-1',
        'description'   => esc_html__( 'Add widgets here to appear in your footer.', 'bolt-theme' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Footer 2', 'bolt-theme' ),
        'id'            => 'footer-2',
        'description'   => esc_html__( 'Add widgets here to appear in your footer.', 'bolt-theme' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Footer 3', 'bolt-theme' ),
        'id'            => 'footer-3',
        'description'   => esc_html__( 'Add widgets here to appear in your footer.', 'bolt-theme' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ) );
}
add_action( 'widgets_init', 'bolt_widgets_init' );

/**
 * Elementor Support
 */
function bolt_elementor_support() {
    // Add Elementor support
    add_theme_support( 'elementor' );

    // Register Elementor locations
    if ( did_action( 'elementor/loaded' ) ) {
        require_once BOLT_THEME_DIR . '/inc/elementor-functions.php';
    }
}
add_action( 'after_setup_theme', 'bolt_elementor_support' );

/**
 * Custom Excerpt Length
 */
function bolt_excerpt_length( $length ) {
    return 30;
}
add_filter( 'excerpt_length', 'bolt_excerpt_length', 999 );

/**
 * Custom Excerpt More
 */
function bolt_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'bolt_excerpt_more' );

/**
 * Add body classes
 */
function bolt_body_classes( $classes ) {
    // Add class for full-width Elementor template
    if ( is_page_template( 'template-elementor-full-width.php' ) ) {
        $classes[] = 'elementor-full-width';
    }

    // Add class for Elementor canvas template
    if ( is_page_template( 'template-elementor-canvas.php' ) ) {
        $classes[] = 'elementor-canvas';
    }

    // Add class if not singular
    if ( ! is_singular() ) {
        $classes[] = 'hfeed';
    }

    return $classes;
}
add_filter( 'body_class', 'bolt_body_classes' );

/**
 * Pingback header
 */
function bolt_pingback_header() {
    if ( is_singular() && pings_open() ) {
        printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
    }
}
add_action( 'wp_head', 'bolt_pingback_header' );

/**
 * Remove WordPress version from head
 */
remove_action( 'wp_head', 'wp_generator' );

/**
 * Disable emoji scripts
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

/**
 * Clean up WordPress head
 */
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'wp_shortlink_wp_head' );
