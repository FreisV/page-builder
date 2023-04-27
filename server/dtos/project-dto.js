module.exports = class ProjectDto {
  id;
  name;
  isOpen;

  constructor(model) {
    this.id = model._id;
    this.name = model.name;
    this.isOpen = model.isOpen;
  }
}