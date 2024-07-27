Event bubbling is a concept in JavaScript where events propagate from the "innermost element" that triggered the event up "to the outer elements". 
This means that if you have nested elements and you click on the innermost one, the event will first be handled by that element and then propagate outward to its parent elements,
all the way up to the root.


<!DOCTYPE html>
<html>
<head>
    <title>Event Bubbling Example</title>
</head>
<body>
    <div id="outer">
        Outer Div
        <div id="inner">
            Inner Div
        </div>
    </div>

    <script>
        document.getElementById('outer').addEventListener('click', () => {
            alert('Outer Div clicked');
        });

        document.getElementById('inner').addEventListener('click', (event) => {
            alert('Inner Div clicked');
            // If you want to stop the bubbling, you can use event.stopPropagation()
            event.stopPropagation();
        });
    </script>
</body>
</html>


Explaination - if you click on the Inner Div, you’ll see the alert Inner Div clicked and Outer Div clicked because the event bubbles up from the Inner Div to the Outer Div. 
If you use event.stopPropagation() inside the Inner Div event handler, it will prevent the event from bubbling up to the Outer Div.


