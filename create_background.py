import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# Create grid
x = np.linspace(-5, 5, 800)
y = np.linspace(-5, 5, 450)
X, Y = np.meshgrid(x, y)

# Create figure
fig, ax = plt.subplots(figsize=(19.2, 10.8), facecolor='white')
ax.set_position([0, 0, 1, 1])
ax.axis('off')

# Initial contour
Z = np.sin(X) + np.cos(Y)
contour = ax.contour(
    X, Y, Z,
    levels=20,  # fewer levels for cleaner look
    colors='#6a9c8f',
    linewidths=1.5,
    linestyles='solid'
)

# Update function for animation
def update(frame):
    global contour
    # Remove old contours
    for c in contour.collections:
        c.remove()
    # Sparse, smooth wave
    Z = np.sin(X + 0.2 * np.sin(frame / 50)) * np.cos(Y - 0.2 * np.cos(frame / 60)) \
        + 0.3 * np.sin(3 * np.sqrt(X**2 + Y**2) - frame / 40)   
    contour = ax.contour(
        X, Y, Z,
        levels=20,
        colors='#6a9c8f',
        linewidths=1.5,
        linestyles='solid'
    )
    return contour.collections

# Animation
anim = animation.FuncAnimation(
    fig, update,
    frames=480,  # smooth 16-second animation at 30 fps
    interval=30,
    blit=False
)

# Save as GIF
anim.save(
    "contour_wave_clean.gif",
    writer=animation.PillowWriter(fps=60),
    dpi=100,
    savefig_kwargs={'facecolor': 'white', 'bbox_inches': 'tight', 'pad_inches': 0}
)

plt.show()
