<?php
/**
 * Main Template File
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 *
 * @package Pacific_Outdoor_Living
 * @version 1.0.0
 */

get_header();
?>

<div id="primary" class="site-content">
    <main id="main" class="site-main">

        <!-- React App Root -->
        <div id="root"></div>

        <?php
        // Fallback content if JavaScript is disabled
        if ( have_posts() ) :
            ?>
            <noscript>
                <div class="container" style="padding: 2rem 1rem;">
                    <?php
                    while ( have_posts() ) :
                        the_post();
                        ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                            <header class="entry-header">
                                <?php the_title( '<h2><a href="' . esc_url( get_permalink() ) . '">', '</a></h2>' ); ?>
                                <div class="entry-meta">
                                    <time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>">
                                        <?php echo esc_html( get_the_date() ); ?>
                                    </time>
                                </div>
                            </header>
                            <div class="entry-content">
                                <?php the_excerpt(); ?>
                                <a href="<?php the_permalink(); ?>"><?php _e( 'Read More', 'pacific-outdoor' ); ?></a>
                            </div>
                        </article>
                        <?php
                    endwhile;

                    the_posts_pagination();
                    ?>
                </div>
            </noscript>
            <?php
        endif;
        ?>

    </main>
</div>

<?php
get_footer();
