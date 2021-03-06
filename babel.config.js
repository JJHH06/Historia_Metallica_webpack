const presets = [
    [
    
    "@babel/preset-env",
    {
        useBuiltIns: "usage",
        corejs: "3"
    },
],
];
const plugins = ["@babel/plugin-transform-arrow-functions", "@babel/plugin-transform-literals","@babel/plugin-transform-parameters"];

module.exports = {presets,plugins};