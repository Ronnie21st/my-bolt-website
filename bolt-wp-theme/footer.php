    </main>

    <?php if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'footer' ) ) : ?>
    <footer id="colophon" class="site-footer">
        <div class="footer-pattern"></div>

        <svg class="footer-wave" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,30 C360,50 720,55 1080,40 C1200,35 1320,25 1440,30 L1440,0 L0,0 Z" fill="currentColor" />
        </svg>

        <div class="footer-content">
            <div class="bolt-container">
                <div class="footer-grid">
                    <div class="footer-column footer-about">
                        <div class="footer-logo">
                            <?php if ( has_custom_logo() ) : ?>
                                <?php the_custom_logo(); ?>
                            <?php else : ?>
                                <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30 5L35 20L45 15L40 30L55 35L40 40L45 55L30 50L25 65L20 50L10 55L15 40L5 35L20 30L15 15L30 5Z" fill="currentColor"/>
                                </svg>
                                <h3 class="footer-site-name"><?php bloginfo( 'name' ); ?></h3>
                            <?php endif; ?>
                        </div>
                        <p class="footer-description">
                            <?php
                            $description = get_bloginfo( 'description', 'display' );
                            if ( $description ) {
                                echo esc_html( $description );
                            } else {
                                esc_html_e( 'Transforming outdoor spaces with beautiful, functional landscapes.', 'bolt-theme' );
                            }
                            ?>
                        </p>
                        <div class="footer-social">
                            <?php if ( has_nav_menu( 'social' ) ) : ?>
                                <?php
                                wp_nav_menu(
                                    array(
                                        'theme_location' => 'social',
                                        'menu_class'     => 'social-links',
                                        'depth'          => 1,
                                        'link_before'    => '<span class="screen-reader-text">',
                                        'link_after'     => '</span>',
                                        'fallback_cb'    => false,
                                    )
                                );
                                ?>
                            <?php endif; ?>
                        </div>
                    </div>

                    <div class="footer-column">
                        <h4 class="footer-title"><?php esc_html_e( 'Quick Links', 'bolt-theme' ); ?></h4>
                        <?php
                        wp_nav_menu(
                            array(
                                'theme_location' => 'footer-1',
                                'menu_class'     => 'footer-menu',
                                'fallback_cb'    => false,
                                'depth'          => 1,
                            )
                        );
                        ?>
                    </div>

                    <div class="footer-column">
                        <h4 class="footer-title"><?php esc_html_e( 'Services', 'bolt-theme' ); ?></h4>
                        <?php
                        wp_nav_menu(
                            array(
                                'theme_location' => 'footer-2',
                                'menu_class'     => 'footer-menu',
                                'fallback_cb'    => false,
                                'depth'          => 1,
                            )
                        );
                        ?>
                    </div>

                    <div class="footer-column">
                        <h4 class="footer-title"><?php esc_html_e( 'Contact', 'bolt-theme' ); ?></h4>
                        <ul class="footer-contact">
                            <?php if ( get_theme_mod( 'bolt_phone' ) ) : ?>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    <a href="tel:<?php echo esc_attr( get_theme_mod( 'bolt_phone' ) ); ?>">
                                        <?php echo esc_html( get_theme_mod( 'bolt_phone' ) ); ?>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if ( get_theme_mod( 'bolt_email' ) ) : ?>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                    <a href="mailto:<?php echo esc_attr( get_theme_mod( 'bolt_email' ) ); ?>">
                                        <?php echo esc_html( get_theme_mod( 'bolt_email' ) ); ?>
                                    </a>
                                </li>
                            <?php endif; ?>
                            <?php if ( get_theme_mod( 'bolt_address' ) ) : ?>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    <span><?php echo esc_html( get_theme_mod( 'bolt_address' ) ); ?></span>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="footer-copyright">
                        <p>
                            <?php
                            printf(
                                esc_html__( '&copy; %1$s %2$s. All rights reserved.', 'bolt-theme' ),
                                date( 'Y' ),
                                get_bloginfo( 'name' )
                            );
                            ?>
                        </p>
                    </div>
                    <div class="footer-credits">
                        <?php
                        wp_nav_menu(
                            array(
                                'theme_location' => 'footer-legal',
                                'menu_class'     => 'footer-legal-menu',
                                'fallback_cb'    => false,
                                'depth'          => 1,
                            )
                        );
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <?php endif; ?>

</div>

<?php wp_footer(); ?>

</body>
</html>
