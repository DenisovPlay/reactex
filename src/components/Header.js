import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<div class="overflow-hidden rounded-lg shadow bg-content-100 drawer drawer-mobile h-52">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle"> 
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-2" class="mb-4 btn btn-primary drawer-button lg:hidden">open menu</label> 
    <div class="hidden text-xs text-center lg:block">Menu is always open on desktop size.
      <br>Resize the browser to see toggle button on mobile size
    </div> 
    <div class="text-xs text-center lg:hidden">Menu can be toggled on mobile size.
      <br>Resize the browser to see fixed sidebar on desktop size
    </div>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 bg-default text-content-700">
      <li>
        <a>Menu Item</a>
      </li> 
      <li>
        <a>Menu Item</a>
      </li>
    </ul>
  </div>
</div>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});