import {makeColorFill, makeImageFill, makeColorFromCSS} from './helpers/utils.js';

class Style {
  constructor() {
    this._fills = [];
    this._borders = [];
    this._shadows = [];
  }

  addColorFill(color) {
    this._fills.push(makeColorFill(color));
  }

  async addImageFill(image) {
    const fill = await makeImageFill(image);

    this._fills.push(fill);
  }

  addBorder({color, thickness}) {
    this._borders.push({
      '_class': 'border',
      'isEnabled': true,
      'color': makeColorFromCSS(color),
      'fillType': 0,
      'position': 1,
      thickness
    });
  }

  addShadow({color = '#000', radius = 1, offsetX = 0, offsetY = 0, spread = 0}) {
    this._shadows.push({
      _class: 'shadow',
      isEnabled: true,
      blurRadius: radius,
      color: makeColorFromCSS(color),
      contextSettings: {
        _class: 'graphicsContextSettings',
        blendMode: 0,
        opacity: 1
      },
      offsetX,
      offsetY,
      spread
    });
  }

  toJSON() {
    return {
      '_class': 'style',
      'fills': this._fills,
      'borders': this._borders,
      'shadows': this._shadows,
      'endDecorationType': 0,
      'miterLimit': 10,
      'startDecorationType': 0
    };
  }
}

export default Style;
