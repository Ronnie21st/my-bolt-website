<?php
/**
 * Single Post Template
 *
 * The template for displaying all single posts.
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

                        <div class="entry-meta" style="color: #666; font-size: 0.875rem;">
                            <span>
                                <time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>">
                                    <?php echo esc_html( get_the_date() ); ?>
                                </time>
                            </span>
                            <span style="margin: 0 0.5rem;">•</span>
                            <span>
                                <?php esc_html_e( 'By', 'pacific-outdoor' ); ?>
                                <a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
                                    <?php echo esc_html( get_the_author() ); ?>
                                </a>
                            </span>
                            <?php if ( has_category() ) : ?>
                                <span style="margin: 0 0.5rem;">•</span>
                                <span><?php the_category( ', ' ); ?></span>
                            <?php endif; ?>
                        </div>
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

                    <?php if ( has_tag() ) : ?>
                        <footer class="entry-footer" style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e5e5e5;">
                            <div class="tags-links">
                                <?php the_tags( '<strong>' . esc_html__( 'Tags:', 'pacific-outdoor' ) . '</strong> ', ', ' ); ?>
                            </div>
                        </footer>
                    <?php endif; ?>
                </article>

                <?php
                // Post navigation
                the_post_navigation( array(
                    'prev_text' => '<span>' . esc_html__( 'Previous:', 'pacific-outdoor' ) . '</span> %title',
                    'next_text' => '<span>' . esc_html__( 'Next:', 'pacific-outdoor' ) . '</span> %title',
                ) );

                // Comments
                if ( comments_open() || get_comments_number() ) :
                    ?>
                    <div class="comments-area" style="margin-top: 3rem;">
                        <?php comments_template(); ?>
                    </div>
                    <?php
                endif;

            endwhile;
            ?>
        </div>
    </main>
</div>

<?php
get_footer();
