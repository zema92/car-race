export class Car {

  private _id: number;
  private _name: string;
  private _description: string;
  private _speed: number;
  private _image: string;

  constructor(obj?: any) {
    this._id = obj && obj._id || 0;
    this._name = obj && obj._name || null;
    this._description = obj && obj._description || null;
    this._speed = obj && obj._speed || 0;
    this._image = obj && obj._image || null;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get speed(): number {
    return this._speed;
  }

  set speed(value: number) {
    this._speed = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}
