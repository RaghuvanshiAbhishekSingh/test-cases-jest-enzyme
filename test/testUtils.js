import { checkPropTypes } from "prop-types";

/**
 * Retrn shallow wrapper containing node(s) with given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search in.
 * @param {string} val -value of data-test attribute
 */ 
export const findByTestAttribute = (wrapper,val) =>{
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component,conformingProps) => {
    const propsError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propsError).toBeUndefined()
}