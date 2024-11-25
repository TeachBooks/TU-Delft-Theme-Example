import os
from sphinx.application import Sphinx
from sphinx.util.fileutil import copy_asset_file

def copy_assets(app: Sphinx, exc: None) -> None:
    base_dir = os.path.dirname(__file__)
    css_file = os.path.join(base_dir, 'tudelftstyle.css')
    js_file = os.path.join(base_dir, 'applycss.js')
    png_file = os.path.join(base_dir, 'TUDelft_logo_rgb.png')

    if app.builder.format == 'html' and not exc:
        static_dir = os.path.join(app.builder.outdir, '_static')
        copy_asset_file(css_file, static_dir)
        copy_asset_file(js_file, static_dir)
        copy_asset_file(png_file, static_dir)

def setup(app: Sphinx):
    app.add_css_file('tudelftstyle.css')
    app.add_js_file('applycss.js')
    app.connect('build-finished', copy_assets)
    return {
        "version": '0.0.1',
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }