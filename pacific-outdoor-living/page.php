<?php
/**
 * Page Template
 *
 * The template for displaying all pages.
 *
 * @package Pacific_Outdoor_Living
 * @version 1.0.0
 */

get_header();
?>

<div id="primary" class="site-content">
    <main id="main" class="site-main">
        <div class="container" style="padding: 2rem 1rem; max-width: 1200px; margin: 0 auto;">
            <?php
            while ( have_posts() ) :
                the_post();
                ?>

                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="post-thumbnail" style="margin-bottom: 2rem;">
                            <?php the_post_thumbnail( 'large' ); ?>
                        </div>
                    <?php endif; ?>

                    <header class="entry-header" style="margin-bottom: 2rem;">
                        <?php the_title( '<h1 style="font-family: \'Playfair Display\', serif; font-size: 2.5rem; color: #19372b; margin-bottom: 1rem;">', '</h1>' ); ?>
                    </header>

                    <div class="entry-content" style="line-height: 1.75; color: #333;">
                        <?php
                        the_content();

                        wp_link_pages( array(
                            'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'pacific-outdoor' ),
                            'after'  => '</div>',
                        ) );
                        ?>
                    </div>

                    <?php if ( comments_open() || get_comments_number() ) : ?>
                        <div class="comments-area" style="margin-top: 3rem;">
                            <?php comments_template(); ?>
                        </div>
                    <?php endif; ?>
                </article>

                <?php
            endwhile;
            ?>
        </div>
    </main>
</div>

<?php
get_footer();
