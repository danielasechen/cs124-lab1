<h1> Our Major Design Decisions </h1>

<h3>Lab 1 Design</h3>

<p>At first it seemed like the best and most obvious alignment would be to center all the items. We originally wanted the heading and all the tasks to be centered.
View our original centered template below:</p>

<img src="/design/CenteredItems.jpeg" alt="Centered Items To-Do List" style="height: 400px; width: 300px;" />

<p>But after Prof Millburn's lecture, we decided that a left-align would look more natural. She mentioned that a user's eyes go immediately to the top left corner of any page, 
so that's where the heaviest part of our to-do list lives. However, we then felt as though the page was a little *too* top heavy so we wanted to make the "Show Uncompleted" and "Delete All Completed" buttons at the bottom page a little bigger so that our page felt more full. </p>

<p> Figuring out how we wanted to the checkboxes to look was difficult. Even though the task sounds simple, getting the satisfying square-like box with the green check icon wasn't so easy. We were thinking of also adding "x"-shaped icons next to each of the tasks. Hopefully as user could easily identify the icons as a signifier for deleting individual tasks. The concurrent version of our to-do list looked like the image below:</p>

<img src="/design/Version2.jpeg" alt="The new checkboxes" style="height: 400px; width: 300px;" />

<p> We did a little bit of user testing. Daniela's mom was our most reliable user. We sent her many drafts and she responded with her thoughts almost immediately every time. Next lab we will probably rely on more friends for user testing. We think this will make it easier to decide on design problems that the two of us might disagree on. For instance, she helped us a little with the color scheme of the title and whether or not we should have text effects (e.g. shadows and glows). View an example of a product from this user testing below:</p>

<img src="/design/Version3.jpeg" alt="User Testing Color Schemes" style="height: 400px; width: 300px;" />

<p> We're proud of the icon and how satisfying the hover function looks on the bottom buttons. The right icon was a little bit difficult to find and once we found it and made it fit with the rest of the page, we were pretty excited. And for a while, something felt wrong about the buttons because they were a similar hue to the rest of the page but just felt weird. Then we inverted the background button color and the button font color and made it so that when you hover over a button the colors invert again to a very nice dark blue background and a white text. We think the bottom buttons look quite nice.</p>



<hr>
<h3>Lab 2 Design</h3>

<p> Our design from Lab 1 supported two ways to add a new task: 
<ol> 
<li> Enter text in the field to the right of the add button, then click on the button to add the task. </li>
<li> First add a blank task, then alter the text. </li>
</ol>
This design is pictured below.
</p>

<img src="/design/Version4.png" alt="Dual Add UI" style="height: 400px; width: 300px;" />
</br>

<p>However, grutor Marcos Acosta pointed out that dual add options made for a confusing UI. He suggested that we remove the text box to the right of the add button and only implement the second method, where the user must first create a new task, then change the placeholder text. This new design is shown below, and we agree that it is much clearer. </p>

| <img src="/design/add-ex1.png" alt="New add task interface, before add" style="height: 400px" /> | <img src="/design/add-ex2.png" alt="New add task interface, after add" style="height: 400px" /> |
| --- | --- |
| <p> Before the add button is clicked </p> | <p> After the add button is clicked </p> |

</br>

Another important decision involved the "Show Only Uncomplete" button. After implementing its toggle functionality (one click hides all completed items; another click brings them back), we realized that users would have no way of knowing whether "Show Only Uncomplete" was on or not. To erase this confusion, we decided to make the button blue when it is toggled.


| <img src="/design/toggle-ex2.png" alt="Before Show Only Uncomplete toggle, before add" style="height: 400px" />  | <img src="/design/toggle-ex1.png" alt="After Show Only Uncomplete toggle, before add" style="height: 400px" /> |
| --- | --- |
| <p> Before Show Only Uncomplete is toggled </p> | <p> After Show Only Uncomplete is toggled </p> |



