        <!DOCTYPE html>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .contact-form {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                width: 300px;
            }
            .contact-form h2 {
                margin-top: 0;
            }
            .contact-form label {
                display: block;
                margin: 15px 0 5px;
            }
            .contact-form input, .contact-form textarea {
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
            .contact-form button {
                background-color: #28a745;
                color: #fff;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
            }
            .contact-form button:hover {
                background-color: #218838;
            }
        </style>
    </head>
    <body>
    
    <div class="contact-form">
        <h2>Contact Me</h2>
        <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
    
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
    
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
    
            <button type="submit">Send Email</button>
        </form>
    </div>
    
    </body>
    </html>