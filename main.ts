player.onChat("run", function () {
	
})
mobs.onMobKilled(WOLF, function () {
    mobs.kill(
    mobs.target(NEAREST_PLAYER)
    )
})
