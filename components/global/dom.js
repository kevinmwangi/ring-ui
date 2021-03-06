/**
 * @name DOM
 * @category Utilities
 * @tags Ring UI Language
 * @description A collection of DOM utilities.
 * @example
   <example name="DOM">
    <file name="index.html">
      <div>
        <div id="rect-target" style="min-width: 200px"></div>

        <div id="report"></div>
      </div>
    </file>
    <file name="index.js">
      import {getStyles, getRect, getPixelRatio, getWindowHeight} from '@jetbrains/ring-ui/components/global/dom';

      const rectTarget = document.getElementById('rect-target');
      rectTarget.innerHTML = `
        Element min-width = ${getStyles(rectTarget).minWidth} <br/>
        Element rect = ${JSON.stringify(getRect(rectTarget))} <br/>
      `;

      const report = document.getElementById('report');
      report.innerHTML = `
       Pixel ratio = ${getPixelRatio()} <br/>
       Window height = ${getWindowHeight()} <br/>
      `;
    </file>
   </example>
 */

export const getStyles = window.getComputedStyle.bind(window);

export function isMounted(node) {
  if (node === document) {
    return true;
  }

  return node instanceof Node && document.documentElement.contains(node.parentNode);
}

const rectStub = {top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0};

export function getRect(node) {
  if (node instanceof Range || isMounted(node)) {
    const {top, right, bottom, left, width, height} = node.getBoundingClientRect();
    return {top, right, bottom, left, width, height};
  } else {
    return Object.assign({}, rectStub);
  }
}

export function getPixelRatio() {
  return 'devicePixelRatio' in window ? window.devicePixelRatio : 1;
}

export function getWindowHeight() {
  return window.innerHeight;
}

export function getDocumentScrollTop() {
  return (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;
}

export function getDocumentScrollLeft() {
  return (document.documentElement && document.documentElement.scrollLeft) ||
    document.body.scrollLeft;
}

export const applyMethodToClasses = method => (classList, classes = '') => {
  classes.
    split(/\s+/g).
    filter(className => !!className).
    forEach(className => classList[method](className));
};

export const addClasses = applyMethodToClasses('add');
export const removeClasses = applyMethodToClasses('remove');

export function setRootStyleProperties(properties = {}) {
  const rootStyle = document.documentElement.style;

  Object.entries(properties).forEach(([key, value]) => {
    rootStyle.setProperty(key, value);
  });
}

export class Listeners {
  _all = new Set();

  add(el, event, handler, useCapture) {
    el.addEventListener(event, handler, useCapture);
    const dispatchFn = () => el.removeEventListener(event, handler, useCapture);
    this._all.add(dispatchFn);
    return dispatchFn;
  }

  remove(fn) {
    fn();
    this._all.delete(fn);
  }

  removeAll() {
    this._all.forEach(fn => this.remove(fn));
  }
}

// Synthetic events from Combokeys#trigger are plain objects
export function preventDefault(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
}
