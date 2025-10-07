<?php
/**
 * Elementor Compatibility Functions
 *
 * @package Bolt_Theme
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Register Elementor Theme Locations
 */
function bolt_register_elementor_locations( $elementor_theme_manager ) {
    $elementor_theme_manager->register_all_core_location();
}
add_action( 'elementor/theme/register_locations', 'bolt_register_elementor_locations' );

/**
 * Add Elementor support for posts and pages
 */
function bolt_add_cpt_support() {
    $post_type = 'page';
    if ( post_type_exists( $post_type ) ) {
        add_post_type_support( $post_type, 'elementor' );
    }

    $post_type = 'post';
    if ( post_type_exists( $post_type ) ) {
        add_post_type_support( $post_type, 'elementor' );
    }
}
add_action( 'init', 'bolt_add_cpt_support' );
