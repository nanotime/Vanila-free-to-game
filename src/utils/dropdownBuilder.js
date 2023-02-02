/**
 * Create a UL node element with a list of items inside to create a dropdown
 *
 * @export
 * @param {*} { options }
 * @return {*}
 */
export function optionsBuilder({ options }) {
  const ul = document.createElement('ul');
  const fragment = new DocumentFragment();

  ul.setAttribute('role', 'listbox');

  options.forEach(option => {
    const item = listItem(option);
    fragment.appendChild(item);
  });

  ul.appendChild(fragment);

  return ul;
}

function listItem({ id, nodeLabel }) {
  const li = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const labelText = document.createTextNode(nodeLabel);

  label.setAttribute('for', id);
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', id);
  input.setAttribute('name', id);

  label.appendChild(input);
  label.appendChild(labelText);
  li.appendChild(label);

  return li;
}
