<?php
/**
 * The main template file
 *
 * @package Bolt_Theme
 */

get_header();
?>

<div class="bolt-container">
    <div class="content-area">
        <?php
        if ( have_posts() ) :

            if ( is_home() && ! is_front_page() ) :
                ?>
                <header class="page-header scroll-reveal">
                    <h1 class="page-title"><?php single_post_title(); ?></h1>
                </header>
                <?php
            endif;

            $post_index = 0;
            while ( have_posts() ) :
                the_post();
                $post_index++;
                $stagger_class = 'stagger-' . min( $post_index, 6 );
                ?>

                <article id="post-<?php the_ID(); ?>" <?php post_class( 'blog-post scroll-reveal ' . $stagger_class ); ?>>
                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="post-thumbnail transition-transform hover-scale-sm">
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail( 'large' ); ?>
                            </a>
                        </div>
                    <?php endif; ?>

                    <header class="entry-header">
                        <?php
                        if ( is_singular() ) :
                            the_title( '<h1 class="entry-title">', '</h1>' );
                        else :
                            the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark" class="transition-colors">', '</a></h2>' );
                        endif;
                        ?>

                        <div class="entry-meta">
                            <span class="posted-on">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>">
                                    <?php echo esc_html( get_the_date() ); ?>
                                </time>
                            </span>
                            <span class="byline">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" class="transition-colors">
                                    <?php echo esc_html( get_the_author() ); ?>
                                </a>
                            </span>
                            <?php if ( has_category() ) : ?>
                                <span class="cat-links">
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                    <?php the_category( ', ' ); ?>
                                </span>
                            <?php endif; ?>
                        </div>
                    </header>

                    <div class="entry-content">
                        <?php
                        if ( is_singular() ) :
                            the_content();

                            wp_link_pages(
                                array(
                                    'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'bolt-theme' ),
                                    'after'  => '</div>',
                                )
                            );
                        else :
                            the_excerpt();
                            ?>
                            <a href="<?php the_permalink(); ?>" class="read-more btn btn-primary transition-all hover-scale">
                                <?php esc_html_e( 'Read More', 'bolt-theme' ); ?>
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="display: inline-block; margin-left: 0.5rem;">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <?php
                        endif;
                        ?>
                    </div>

                    <?php if ( is_singular() && ( comments_open() || get_comments_number() ) ) : ?>
                        <footer class="entry-footer">
                            <?php comments_template(); ?>
                        </footer>
                    <?php endif; ?>
                </article>

                <?php
            endwhile;

            the_posts_pagination(
                array(
                    'mid_size'  => 2,
                    'prev_text' => '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg> ' . __( 'Previous', 'bolt-theme' ),
                    'next_text' => __( 'Next', 'bolt-theme' ) . ' <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>',
                )
            );

        else :
            ?>
            <div class="no-results scroll-reveal">
                <h1><?php esc_html_e( 'Nothing Found', 'bolt-theme' ); ?></h1>
                <p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'bolt-theme' ); ?></p>
                <?php get_search_form(); ?>
            </div>
            <?php
        endif;
        ?>
    </div>
</div>

<?php
get_footer();
