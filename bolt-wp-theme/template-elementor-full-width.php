<?php
/**
 * Template Name: Elementor Full Width
 * Template Post Type: page, post
 *
 * @package Bolt_Theme
 */

get_header();
?>

<div class="elementor-page-wrapper">
    <?php
    while ( have_posts() ) :
        the_post();
        the_content();
    endwhile;
    ?>
</div>

<?php
get_footer();
