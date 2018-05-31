/**
 *
 * @param controller
 * @param condition
 * @returns {boolean}
 */
const checkCondition = (controller,condition) => {
    console.log(controller);
    controller.sourceTargets.forEach(function (element) {
        condition = condition.replace(element.dataset.target, element.value);
    });
    return eval(condition);
};

/**
 *
 */
const checkShow = (controller) =>  {
    controller.element.querySelectorAll('[data-show]').forEach(function (element) {
        if (checkCondition(controller,element.getAttribute('data-show'))) {
            element.style.display = 'none';
            return;
        }
        element.style.display = '';
    });
};

/**
 *
 * @param controller
 */
const collectionFunction = (controller) => {
    checkShow(controller);
};

/**
 *
 * @param element
 * @param events
 * @param func
 */
const addBind = (element, events, func) => {
    events.split(' ').forEach(e => element.addEventListener(e, func, false));
};

/**
 *
 * @param element
 * @param events
 * @param func
 */
const removeBind = (element, events, func) =>  {
    events.split(' ').forEach(e => element.removeEventListener(e, func, false));
};

/**
 *
 * @param controller
 */
export function connect(controller) {

    collectionFunction(controller);
    controller.element.querySelectorAll('[data-target]').forEach(function (element) {
        addBind(element, 'change keyup', function () {
            collectionFunction(controller);
        })
    });
};

/**
 *
 * @param controller
 */
export function disconnect(controller) {
    collectionFunction(controller);
    controller.element.querySelectorAll('[data-target]').forEach(function (element) {
        removeBind(element, 'change keyup', function () {
            collectionFunction(controller);
        })
    });
};

/**
 *
 */
export default {
    connect,disconnect
}
