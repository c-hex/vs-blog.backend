---
tag: ["기술", "리뷰"]
date: "2022-11-10"
---

# Lorem ipsum dolor sit amet.

`Lorem` ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt inventore eligendi facere est nesciunt fugiat consequuntur nostrum veritatis. **Et necessitatibus exercitationem sint molestiae commodi alias dignissimos magni dicta suscipit!**

Repudiandae est repellat libero sapiente dolores adipisci nam unde quae velit porro quod iusto a ab earum dolore facilis aliquid, dolorum magnam! Iure, sit voluptates asperiores tempora doloremque vitae delectus?
Delectus at voluptas, ea molestias animi possimus dolores voluptate rerum beatae, dolorum quisquam quas illum temporibus unde nisi quod, iure laboriosam aliquam iste repellat? Exercitationem odit iste autem consequuntur officia!

Illum non, veritatis incidunt vitae, magnam culpa, cumque necessitatibus mollitia quia delectus accusamus officiis assumenda quaerat aut beatae aliquid voluptatem harum. Aspernatur quaerat libero animi pariatur voluptatem accusamus voluptatum neque.
Veniam natus modi sed cupiditate qui, nostrum explicabo quam consequuntur odit similique alias ipsa excepturi voluptates minus officiis laudantium voluptatum quos placeat hic pariatur autem optio eos commodi ad. Impedit.

## Lorem ipsum dolor sit amet.

### (1) Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt inventore eligendi facere est nesciunt fugiat consequuntur nostrum veritatis.

```jsx{2}
function Counter () {
  const [count, setCount] = useState(1);
  // 돔에서 직접 호출하기 위해 window(전역객체)에 할당
  window.increment = () => setCount(count + 1);
  return `
    <div>
      <strong>count: ${count} </strong>
      <button onclick="increment()">증가</button>
    </div>
  `;
}
```

1. Lorem ipsum dolor sit amet.
2. Lorem ipsum dolor sit amet.
3. Lorem ipsum dolor sit amet.
4. Lorem ipsum dolor sit amet.
5. **Lorem ipsum dolor sit amet.**

Lorem ipsum dolor sit amet consectetur adipisicing elit.

### (2) Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quis deserunt inventore eligendi facere est nesciunt fugiat consequuntur nostrum veritatis.

```jsx{7-18}
/** HTML **/
<div id="app"></div>
/** Javascript **/
function useState (initState) { }
function Counter () {
  const [count, setCount] = useState(1);
  window.increment = () => setCount(count + 1);
  return `
    <div>
      <strong>count: ${count} </strong>
      <button onclick="increment()">증가</button>
    </div>
  `;
}
function render () {
	const $app = document.querySelector('#app');
	$app.innerHTML = Counter();
}
render();
```
