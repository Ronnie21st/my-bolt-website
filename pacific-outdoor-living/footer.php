<?php
/**
 * Footer Template
 *
 * @package Pacific_Outdoor_Living
 * @version 1.0.0
 */
?>

    <?php
    // Check if Elementor is handling the footer
    if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'footer' ) ) :
        // React will render the footer
    endif;
    ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
