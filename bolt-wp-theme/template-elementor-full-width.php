<?php
/**
 * Template Name: Elementor Full Width
 * Template Post Type: page, post
 *
 * A full-width template for Elementor page builder.
 * Displays content edge-to-edge with no sidebar.
 *
 * @package Bolt_Theme
 * @version 1.0.0
 */

get_header();
?>

<div class="elementor-page-full-width">
    <?php
    while ( have_posts() ) :
        the_post();
        the_content();
    endwhile;
    ?>
</div>

<?php
get_footer();
