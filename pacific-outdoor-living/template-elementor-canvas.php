<?php
/**
 * Template Name: Elementor Canvas
 * Template Post Type: page, post
 *
 * Blank canvas template for Elementor - no header or footer.
 *
 * @package Pacific_Outdoor_Living
 * @version 1.0.0
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php
while ( have_posts() ) :
    the_post();
    the_content();
endwhile;
?>

<?php wp_footer(); ?>
</body>
</html>
