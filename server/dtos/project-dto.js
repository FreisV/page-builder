module.exports = class ProjectDto {
  id;
  ownerId;
  name;
  isOpen;

  constructor(model) {
    this.id = model._id;
    this.ownerId = model.ownerId;
    this.name = model.name;
    this.isOpen = model.isOpen;
  }
}