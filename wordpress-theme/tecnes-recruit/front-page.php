<?php
/**
 * Front page – aggregates all top-page sections.
 */
get_header(); ?>

<main class="l-main">
    <?php
    get_template_part( 'template-parts/main-visual' );
    get_template_part( 'template-parts/read' );
    get_template_part( 'template-parts/business' );
    get_template_part( 'template-parts/flow' );
    get_template_part( 'template-parts/about' );
    get_template_part( 'template-parts/discovery' );
    get_template_part( 'template-parts/people' );
    get_template_part( 'template-parts/environment' );
    get_template_part( 'template-parts/footnav' );
    ?>
</main>

<?php get_footer(); ?>
