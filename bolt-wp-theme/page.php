<?php
/**
 * The template for displaying all pages
 *
 * @package Bolt_Theme
 */

get_header();
?>

<div class="bolt-container">
    <div class="content-area page-content scroll-reveal">
        <?php
        while ( have_posts() ) :
            the_post();
            ?>

            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <?php if ( has_post_thumbnail() && ! is_front_page() ) : ?>
                    <div class="page-thumbnail transition-transform">
                        <?php the_post_thumbnail( 'large' ); ?>
                    </div>
                <?php endif; ?>

                <header class="entry-header">
                    <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                </header>

                <div class="entry-content">
                    <?php
                    the_content();

                    wp_link_pages(
                        array(
                            'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'bolt-theme' ),
                            'after'  => '</div>',
                        )
                    );
                    ?>
                </div>

                <?php if ( comments_open() || get_comments_number() ) : ?>
                    <footer class="entry-footer">
                        <?php comments_template(); ?>
                    </footer>
                <?php endif; ?>
            </article>

            <?php
        endwhile;
        ?>
    </div>
</div>

<?php
get_footer();
