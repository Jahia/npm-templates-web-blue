import {registry} from '@jahia/server-helpers';
// Import repeat from 'handlebars-helper-repeat';
const repeat = require('handlebars-helper-repeat');

const Handlebars = registry.get('module', 'handlebars');
Handlebars.exports.registerHelper('repeat', repeat);

Handlebars.exports.registerHelper('area', ({name, type, index}) => {
    const area = {
        name: name + index,
        nodeType: type ? type : 'jnt:area'
    };

    console.log('**** area :', JSON.stringify(area));
    return area;
});

Handlebars.exports.registerHelper('concat', (str, suffix) => {
    return str + suffix;
});
