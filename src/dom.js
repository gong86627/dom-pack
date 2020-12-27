window.dom = {
  /**
   * 新增
   */
  create(string) {
    let container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  after(node, node2) {
    //在node的后面添加一个新的node2节点
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2) {
    //在node前新增一个node2
    node.parentNode.insertBefore(node2, node);
  },
  append(parent, child) {
    //给父节点添加一个子节点
    parent.appendChild(child);
  },
  wrap(node, parent) {
    //给节点node，添加一个父节点
    dom.before(node, parent);
    dom.append(parent, node);
  },
  /**
   * 删
   */
  remove(node) {
    //删除一个节点，并返回删除的节点
    node.parentNode.removeChild(node);
    return node;
  },
  empty(node) {
    //清空节点的所有子元素，并返回清除的节点
    //const { childNodes } = node; // const childNodes = node.childNodes
    const array = [];
    x = node.firstChild;
    while (x) {
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return array;
  },
  /**
   * 改
   */
  attr(node, name, value) {
    //设置或读取节点属性赋值
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else {
      return node.getAttribute(name);
    }
  },
  text(node, string) {
    //设置节点的文本内容
    if (arguments.length == 2) {
      "innerText" in node
        ? (node.innerText = string)
        : (node.textContent = string);
    } else {
      return "innerText" in node ? node.innerText : node.textContent;
    }
  },
  html(node, string) {
    //设置节点的html内容
    if (arguments.length == 2) {
      //根据参数的长度进行重载
      node.innerHTML = string;
    } else {
      return node.innerHTML;
    }
  },
  style(node, name, value) {
    //设置节点的样式
    if (arguments.length === 3) {
      //dom.style(div, 'color', 'red')
      node.style[name] = value;
    } else {
      if (typeof name === "string") {
        //dom.style(div, 'color')
        return node.style[name];
      } else if (name instanceof Object) {
        //dom.style(div, {border:'1px solid red', color:'red'})
        for (let key in name) {
          node.style[key] = name[key];
        }
      }
    }
  },
  class: {
    //给点加样式 dom.class.add(test, 'red')
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
  on(node, eventName, fn) {
    //给某个节点加监听事件
    node.addEventListener(eventName, fn);
  },
  off(node, eventName, fn) {
    //移除节点事件，并执行fn
    node.removeEventListener(eventName, fn);
  },
  /**
   * 查
   */
  find(selector, scope) {
    //dom.find('#test')[0]
    return (scope || document).querySelectorAll(selector);
  },
  parent(node) {
    //dom.parent(test)
    return node.parentNode;
  },
  children(node) {
    return node.children;
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter((n) => n !== node);
  },
  next(node) {
    x = node.nextSibling;
    while (x && x.nodeType === 3) {
      x = x.nextSibling;
    }
    return x;
  },
  previous(node) {
    x = node.previousSibling;
    while (x && x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  index(node) {
    //返回节点的索引号，也就是排第几
    const nodeList = dom.children(node.parentNode);
    let i;
    for (i = 0; i < nodeList.length; i++) {
      if (nodeList[i] === node) break;
    }
    return i < nodeList.length ? i : undefined;
  },
};
