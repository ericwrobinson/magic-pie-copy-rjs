import enquire from 'enquire.js';

let desktop = { min: _parsePxStringToInt('768px'), max: null };
let tablet = {
  max: _parsePxStringToInt('768px'),
  min: _parsePxStringToInt('480px'),
};
let mobile = { max: _parsePxStringToInt('480x'), min: null };

class ViewportManager {
  constructor(config) {
    this.viewport = this._calculateInitialViewport();
    if (!global.callbacks) global.callbacks = {};
  }

  register({ maxMobile = '480px', maxTablet = '768px'}) {
    const self = this;

    let desktopQuery = `screen and (min-width:${maxTablet})`;
    let tabletQuery = `screen and (max-width:${maxTablet})`;
    let mobileQuery = `screen and (max-width:${maxMobile})`;

    if (this.registered) return;
    //If it goes from Tablet to Desktop
    enquire.register(desktopQuery, {
      match: function() {
        self._changeViewport('desktop');
      },
    });

    //If it goes from Desktop to Tablet
    enquire.register(tabletQuery, {
      match: function() {
        self._changeViewport('tablet');
      },
    });

    //If it goes from Tablet to Mobile
    enquire.register(mobileQuery, {
      match: function() {
        self._changeViewport('mobile');
      },
      unmatch: function() {
        self._changeViewport('tablet');
      },
    });
    this.registered = true;
  }

  unregister({ maxMobile = '544px', maxTablet = '1025px'}) {
    let desktopQuery = `screen and (min-width:${maxTablet})`;
    let tabletQuery = `screen and (max-width:${maxTablet})`;
    let mobileQuery = `screen and (max-width:${maxMobile})`;

    if (!this.registered) return;

    enquire.unregister(desktopQuery);
    enquire.unregister(tabletQuery);
    enquire.unregister(mobileQuery);
  }

  subscribe(id, cb) {
    global.callbacks[id] = { callbackFn: cb };
  }

  unsubscribe(id) {
    delete global.callbacks[id];
  }

  _calculateInitialViewport() {
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    let viewport;
    if (
      (desktop.min === null || (desktop.min && width >= desktop.min)) &&
      (desktop.max === null || (desktop.max && width <= desktop.max)) &&
      (desktop.min !== null || desktop.max !== null)
    ) {
      viewport = 'desktop';
    } else if (
      (tablet.min === null || (tablet.min && width >= tablet.min)) &&
      (tablet.max === null || (tablet.max && width <= tablet.max)) &&
      (tablet.min !== null || tablet.max !== null)
    ) {
      viewport = 'tablet';
    } else if (
      (mobile.min === null || (mobile.min && width >= mobile.min)) &&
      (mobile.max === null || (mobile.max && width <= mobile.max)) &&
      (mobile.min !== null || mobile.max !== null)
    ) {
      viewport = 'mobile';
    }
    return viewport;
  }

  _changeViewport(currentViewport) {
    this.viewport = currentViewport;
    let callbackKeys = Object.keys(global.callbacks);
    if (callbackKeys.length > 0) {
      callbackKeys.forEach(key => {
        if (
          global.callbacks &&
          global.callbacks[key] &&
          global.callbacks[key].callbackFn
        ) {
          global.callbacks[key].callbackFn(currentViewport);
        }
      });
    }
  }
}

export default new ViewportManager();

//Helpers
function _parsePxStringToInt(string) {
  if (typeof string == 'number') return string;
  if (!string.indexOf('px')) return parseInt(string);
  return parseInt(string.split('px')[0]);
}
