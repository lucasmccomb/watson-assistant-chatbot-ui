// Gets the origin of this script from the hosting document
for (i in document.scripts) {
    if (document.scripts[i].getAttribute('data-main') === 'chat_bot_app') {
        var assistantHostUrl = document.scripts[i].src;
        var assistantHost = assistantHostUrl.replace(/(\/\/.*?\/).*/g, '$1').slice(0, -1);
        break;
    }
}

/**
 * Array of elements to be added to DOM.
 * elementObject: {
 *      name: [string] reference name for creating element (required),
 *      type: [string] type of element to create (required),
 *      attrs: [array] array of objects to add to element as attributes (optional),
 *          attrsObj: {
 *              name: [string] attribute to be added (required),
 *              val: [string] value of attribute (required)
 *          }
 * }
 */
const elemList = [
    {
        name: 'bundleScript',
        type: 'script',
        attrs: [
            {name: 'src', val: assistantHost +  '/bundle.js'}
        ]
    },{
        name: 'chatWrap',
        type: 'div',
        attrs: [
            {name: 'id', val: 'chat_bot_wrapper'},
            {
                name: 'style',
                val: 'width: 500px; height: 500px; position: absolute; bottom: 0; right: 0;'
            }
        ]
    },{
        name: 'styleSheetLink',
        type: 'link',
        attrs: [
            {name: 'rel', val: 'stylesheet'},
            {name: 'type', val: 'text/css'},
            {name: 'href', val: assistantHost + '/chat_bot_styles.css'}
        ]
    }
];

// Dictionary for storing newly created DOM elements
let elemDictionary = {
    bundleScript: null,
    chatWrap: null,
    styleSheetLink: null
};

// Element builder function
const createElem = (elemObj, document, elemDictionary) => {
    var currElem = document.createElement(elemObj.type);

    // Checks if element has attributes to be added
    if(!!elemObj.attrs && elemObj.attrs.length > 0) {
        elemObj.attrs.forEach(function(attr) {
            if(Array.isArray(attr.val)) {
                var completeVal = attr.val.join(' ');
                currElem.setAttribute(attr.name, completeVal);
            } else if(typeof attr.val === 'string') {
                currElem.setAttribute(attr.name, attr.val)
            }
        });
    }

    // Sets element equal to it's counterpart in the elemDictionary object
    if(!!elemDictionary && !elemDictionary[elemObj.name]) {
        elemDictionary[elemObj.name] = currElem;
    }
}

document.addEventListener('DOMContentLoaded', function() {

    // Builds DOM elements
    elemList.forEach(function(elem) {
        createElem(elem, document, elemDictionary);
    });

    // Appends new elements to DOM
    document.body.appendChild(elemDictionary.bundleScript.cloneNode(true));
    document.body.appendChild(elemDictionary.chatWrap.cloneNode(true));
    document.head.appendChild(elemDictionary.styleSheetLink.cloneNode(true));
});
