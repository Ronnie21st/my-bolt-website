<?php
/**
 * Template Name: Elementor Full Width
 * Template Post Type: page, post
 *
 * Full-width template for Elementor page builder.
 *
 * @package Pacific_Outdoor_Living
 * @version 1.0.0
 */

get_header();
?>

<div id="primary" class="site-content elementor-full-width">
    <main id="main" class="site-main">
        <?php
        while ( have_posts() ) :
            the_post();
            the_content();
        endwhile;
        ?>
    </main>
</div>

<?php
get_footer();
