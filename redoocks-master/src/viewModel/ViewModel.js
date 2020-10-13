class BookViewModel {
  constructor(model) {
    this.model = model; // 바인딩 작업
  }
  getAll() {
    return this.model.getAll();
  }
  get(idx) {
    return this.model.get(idx);
  }
  remove(idx) {
    return this.model.remove(idx);
  }
}
export default BookViewModel;
