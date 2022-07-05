
<script>
    // your script goes here
</script>

<style>
    /* your styles go here */

    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
    .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 60px;
}

.header ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header ul li {
  margin-left: 20px;
}

.header ul li a {
  display: flex;
  align-items: center;
}

.header ul li a:hover {
  color: #777;
}

.header ul li a svg {
  margin-right: 5px;
}

a {
  text-decoration: none;
  color: #000;
}

ul {
  list-style: none;
}

li {
  line-height: 2.2;
}

</style>

<!-- markup (zero or more items) goes here -->
<header class="header">
    <div class="logo"><a href="/">GoalSetter</a></div>
    <ul>
        <li><a href="/login"><i class="bi bi-box-arrow-in-right"></i>Login</a></li>
        <li><a href="/register">Register</a></li>
    </ul>
</header>