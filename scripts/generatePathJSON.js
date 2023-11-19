import fs from "fs";
import dirTree from "directory-tree";
import _ from "lodash"

fs.cpSync("./icons", "./docs/public/icons/", { recursive: true });

function callback(item, path) {
  item.componentName = _.startCase(_.camelCase(item.name.split('.')[0])).replace(/ /g, '');
  const splitPath = path.split('/');
  item.category = splitPath[splitPath.length - 2];
}

const tree = dirTree("docs/public/icons", {}, callback);

const allIcons = { icons: tree.children.map((category) => category.children).flat() };

fs.writeFile('./docs/src/icons.json', JSON.stringify(allIcons, null, 2), (error) => {
  if (error) {
    console.log('An error occurred ', error);
    return;
  }
  console.log('Data saved to the file');
})