workflow "Build the project" {
  on = "push"
  resolves = ["Build API"]
}

action "Install API" {
  uses = "borales/actions-yarn@v2.0.0"
  needs = ["install:api"]
}

action "Build API" {
  uses = "borales/actions-yarn@v2.0.0"
  args = ["build"]
  needs = ["Install API"]
}
