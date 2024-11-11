function showContent(mealType) {
    const contentArea = document.getElementById('content-area');
    let content = '';

    if (mealType === 'breakfast') {
        content = `
           
            <div class="recipe-grid">
                <div class="recipe-item">
                    <img src="images/chinesefood.jpg" alt="Pancakes">
                    <h3>Pancakes with Maple Syrup</h3>
                    
                    <p>Delicious pancakes with fresh syrup and fruits.</p>
                </div>

                <div class="recipe-item">
                    <img src="images/cookie.jpg" alt="Smoothie">
                    <h3>Fruit Smoothie Cookie</h3>
                    <p>A refreshing cookies with a variety of fruits.</p>
                </div>
                 <div class="recipe-item">
                    <img src="images/starter1.jpg" alt="Smoothie">
                    <h3>Avocado Toast</h3>
                    <p>Toasted bread topped with mashed avocado.</p>
                </div>
                 <div class="recipe-item">
                    <img src="images/dish.jpg" alt="Smoothie">
                    <h3>Granola with Yogurt</h3>
                    <p>Crunchy granola mixed and topped with fresh fruits.</p>
                </div>
                 <div class="recipe-item">
                    <img src="images/chinese-food2.jpg" alt="Smoothie">
                    <h3>Smoothie Bowl</h3>
                    <p>A thick smoothie served in a bowl, topped with fruits and seeds.</p>
                </div>
                 <div class="recipe-item">
                    <img src="images/paneer1.jpg" alt="Smoothie">
                    <h3>Chia Pudding</h3>
                    <p>created a pudding-like texture, often topped with nuts..</p>
                </div>
                 <div class="recipe-item">
                    <img src="images/desert7.jpg" alt="Smoothie">
                    <h3>Breakfast Burrito</h3>
                    <p>A tortilla filled with scrambled eggs, cheese, beans, and salsa,.</p>
                </div>
                 <div class="recipe-item">
                    <img src="images/desert11.jpg" alt="Smoothie">
                    <h3>Banana Pankcakes</h3>
                    <p>Pancakes made with mashed bananas for extra sweetness and flavor.</p>
                </div>
            </div>
        `;
    } else if (mealType === 'lunch') {
        content = `
            
            <div class="recipe-grid">
                <div class="recipe-item">
                    <img src="images/paneer1.jpg" alt="Salad">
                     <h3>Caesar Salad</h3>
                    <p>Crisp romaine with creamy Caesar dressing.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/starter7.jpg" alt="Stir Fry">
                    <h3>Grilled Cheese Sandwich</h3>
                    <p>Melted cheese between buttery toasted bread.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/starter2.jpg" alt="Salad">
                    <h3>Vegetable Stir-fry</h3>
                    <p>Sautéed vegetables with a light soy sauce glaze.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/noodles.jpg" alt="Stir Fry">
                    <h3>Quinoa Salad</h3>
                    <p>A colorful mix of vegetables and spices.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/dish.jpg" alt="Salad">
                    <h3>Sushi Rolls</h3>
                    <p>Rice rolls filled with fish and fresh veggies.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/chinese-food2.jpg" alt="Stir Fry">
                    <h3>Spaghetti Carbonara</h3>
                    <p>Pasta with creamy sauce, bacon, and Parmesan.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/starter5.jpg" alt="Salad">
                    <h3>Falafel Wrap</h3>
                    <p>Soft pita with falafel, veggies, and tahini.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/pizza.jpg" alt="Stir Fry">
                    <h3>Burrito Bowl</h3>
                    <p>Rice, beans, veggies, and meat with salsa.</p>
                </div>
            </div>
        `;
    } else if (mealType === 'dinner') {
        content = `
            <div class="recipe-grid">
                <div class="recipe-item">
                    <img src="images/paneer3.jpg" alt="Salmon">
                    <h3>Grilled Lemon Herb</h3>
                    <p> Juicy veggy seasoned with fresh herbs.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/paneer2.jpg" alt="Curry">
                    <h3>Stir-Fry with Vegetables</h3>
                    <p>Tender tossed with colorful vegetables.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/chinesefood.jpg" alt="Salmon">
                    <h3>Shrimp Scampi Pasta</h3>
                    <p>Garlicky shrimp with buttery, lemon pasta.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/paneer4.jpg" alt="Curry">
                    <h3>Bell Peppers</h3>
                    <p>Peppers filled with rice, beans, and spices.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/dish-2.jpg" alt="Salmon">
                    <h3>Vegetable Pad Thai</h3>
                    <p>Noodles with tofu, peanuts, and veggies.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/paneer1.jpg" alt="Curry">
                    <h3>Honey Garlic Salmon</h3>
                    <p>Salmon glazed with honey and garlic.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/starter4.jpg" alt="Salmon">
                    <h3>Eggplant Parmesan</h3>
                    <p> Breaded eggplant topped with cheese and marinara.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/paneer2.jpg" alt="Curry">
                    <h3>Lentil Curry with Rice </h3>
                    <p>Spiced lentils in a savory curry sauce.</p>
                </div>
            </div>
        `;
    }

    else if (mealType === 'snacks') {
        content = `
           
            <div class="recipe-grid">
                <div class="recipe-item">
                    <img src="images/burger.jpg" alt="Salmon">
                    <h3>Mini Cheese Quesadillas</h3>
                    <p>Warm, cheesy bites with crispy edges..</p>
                </div>
                <div class="recipe-item">
                    <img src="images/noodles.jpg" alt="Curry">
                    <h3>Veggie Spring Rolls</h3>
                    <p>Crunchy rolls with fresh veggie filling.</p>
                </div>
                 <div class="recipe-item">
                    <img src="images/starter4.jpg" alt="Salmon">
                    <h3>Loaded Nachos</h3>
                    <p>Tortilla chips topped with cheese, salsa.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/desert11.jpg" alt="Curry">
                    <h3>Stuffed Jalapeño Poppers</h3>
                    <p>Spicy peppers stuffed with cheese, baked.</p>
                </div>
                 <div class="recipe-item">
                    <img src="images/noodles2.jpg" alt="Salmon">
                    <h3>Mini Samosas</h3>
                    <p>Crispy pastry with savory potato filling.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/french-fries.jpg" alt="Curry">
                    <h3>Hummus with Pita Chips</h3>
                    <p>Creamy hummus paired with crunchy chips.</p>
                </div>
                 <div class="recipe-item">
                    <img src="images/pizza3.jpg" alt="Salmon">
                    <h3>Popcorn with Parmesan and Herbs</h3>
                    <p>Light popcorn with a cheesy herb twist.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/pizza.jpg" alt="Curry">
                    <h3>Caprese Skewers</h3>
                   <p>Tomato, mozzarella, and basil on sticks.</p>
                </div>
            </div>
        `;
    }
    else if (mealType === 'desserts') {
        content = `
            <div class="recipe-grid">
                <div class="recipe-item">
                    <img src="images/desert3.jpg" alt="Salmon">
                    <h3>Tiramisu</h3>
                    <p>Coffee-flavored layers with creamy mascarpone.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/desert4.jpg" alt="Curry">
                    <h3>CheeseCake</h3>
                    <p>Rich, creamy, and often fruit-topped.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/desert5.jpg" alt="Salmon">
                    <h3>Macarons</h3>
                    <p>Colorful, delicate cookies with creamy filling.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/desert9.jpg" alt="Curry">
                    <h3>Pavlova</h3>
                    <p>Crisp meringue topped with fresh fruit.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/desert8.jpg" alt="Salmon">
                    <h3>Creme Brulee</h3>
                    <p>Custard with a caramelized sugar crust.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/desert7.jpg" alt="Curry">
                    <h3>Churros</h3>
                    <p>Fried dough with cinnamon and chocolate.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/desert2.jpg" alt="Salmon">
                    <h3>Panna Cotta</h3>
                    <p>Smooth, creamy dessert with fruit topping.</p>
                </div>
                <div class="recipe-item">
                    <img src="images/desert10.jpg" alt="Curry">
                    <h3>Brownies</h3>
                    <p>Fudgy chocolate squares with a crisp top.</p>
                </div>
            </div>
        `;
    }
    contentArea.innerHTML = content;
}
