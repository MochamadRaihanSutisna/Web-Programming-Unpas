import turtle
t = turtle.Turtle()
t.screen.bgcolor(bl)
t.pensize(2)
t.color('green')
t.left(90)
t.backward(100)
t.speed(200)
t.shape('turtle')

def tree(i):
	if i<10:
		return
	else
		t.forward(i)