// system params
const project_flr = "dist";
const source_flr = "app";
const baseDir = "./" + project_flr + "/";
const fs = require('fs');
const pathFiles = "/assets/";
const outPathFiles = "/assets/";

// main path
let path = {
    build: {
        html: project_flr + "/",
        css: project_flr + pathFiles + "css/",
        js: project_flr + pathFiles + "js/",
        ts: project_flr + pathFiles + "js/",
        img: project_flr + pathFiles + "images/",
        fonts: project_flr + pathFiles + "fonts/",
        libs: project_flr + pathFiles + "libs/",
        video: project_flr + pathFiles + "video/",
        svg: project_flr + pathFiles + "images/svg/",
    },
    src: {
        html: source_flr + "/html/*.html",
        css: source_flr + "/scss/style.scss",
        js: source_flr + "/scripts/**/*.js",
        ts: source_flr + "/ts/**/*.ts",
        video: source_flr + "/video/*.{mp4,webm,ogv,swf}",
        img: source_flr + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_flr + "/fonts/*.{otf,ttf,woff2,woff}",
        sourcesFonts: source_flr + "/fonts/sources-fonts/*.{otf,ttf,woff2,woff}",
        svg: source_flr + "/html/svg/*.svg",
        fontsStorage: source_flr + "/fonts/",
    },
    watch: {
        html: source_flr + "/**/*.html",
        css: source_flr + "/scss/**/*.scss",
        video: source_flr + "/video/**/*.{mp4,webm,ogv,swf}",
        js: source_flr + "/scripts/**/*.js",
        ts: source_flr + "/ts/**/*.ts",
        libs: source_flr + "/libs/**/*.{js}",
        img: source_flr + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
        svg: source_flr + "/html/svg/*.svg"
    },
    clean: baseDir,
}

// plugins
let { src, dest } = require("gulp"),
    gulp = require("gulp"),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    formatHtml = require('gulp-format-html'),
    scss = require('gulp-sass')(require('sass')),
    gcmq = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    ts = require('gulp-typescript'),
    uglify = require('gulp-uglify-es').default,
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    svgSprite = require('gulp-svg-sprite'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    fonter = require('gulp-fonter'),
    concat = require('gulp-concat'),
    browsersync = require("browser-sync").create();


const jsFiles = [
    // 'node_modules/swiper/swiper-bundle.js',
];

function browserSync() {
    browsersync.init({
        server: {
            baseDir: baseDir
        },
        port: 3000,
        notify: false
    })
}

function clean() {
    return del(path.clean);
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(formatHtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 5 version'],
                cascade: true
            })
        )
        .pipe(dest(path.build.css))
        .pipe(cleanCSS())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}
function typeScript() {
    return src(path.src.ts)
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        }))
        .pipe(dest(path.build.ts));
}

function js() {
    return src(path.src.js)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                basename: "scripts",
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function libs() {
    return src(jsFiles)
        .pipe(plumber())
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename('libs.min.js'))
        .pipe(gulp.dest(path.build.libs))
        .pipe(browsersync.stream())
}

function fonts2woff() {
    src(path.src.sourcesFonts)
        .pipe(ttf2woff())
        .pipe(dest(path.src.fontsStorage));
    return src(path.src.sourcesFonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.src.fontsStorage));
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
}

function video() {
    return src(path.src.video)
        .pipe(dest(path.build.video))
}

function svg() {
    return gulp.src([source_flr + '/html/svg/*.svg'])
        .pipe(dest(path.build.svg))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../icons/icons.svg",
                    example: true,
                }
            },
        }
        ))
        .pipe(gulp.dest(path.build.svg))
}

function images() {
    return src(path.src.img)
        .pipe(src(path.src.img))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

// eventListener
function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.ts], typeScript);
    gulp.watch([path.watch.libs], libs);
    gulp.watch([path.watch.img], images);
    gulp.watch([path.watch.svg], svg);
    gulp.watch([path.watch.video], video);
}

// add fonts in style.scss
function fontsStyle() {
    let file_content = fs.readFileSync(source_flr + '/scss/fonts.scss');
    if (file_content == '') {
        fs.writeFile(source_flr + '/scss/fonts.scss', '', cb);
        return fs.readdir(path.src.fontsStorage, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    if (items[i] != 'sources-fonts') {
                        let fontname = items[i].split('.');
                        fontname = fontname[0];
                        if (c_fontname != fontname) {
                            fs.appendFile(source_flr + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                        }
                        c_fontname = fontname;
                    }
                }
            }
        })
    }
}

function cb() { }

// fonts otf2ttf
gulp.task('fonter', function () {
    return src([source_flr + '/fonts/*.otf'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(source_flr + '/fonts/'))
})

let build = gulp.series(clean, html, gulp.parallel(css, video, js, typeScript, images, fonts))
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.fontsStyle = fontsStyle;
exports.fonts2woff = fonts2woff;
exports.fonts = fonts;
exports.images = images;
exports.video = video;
exports.libs = libs;
exports.svg = svg;
exports.js = js;
exports.ts = ts;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
