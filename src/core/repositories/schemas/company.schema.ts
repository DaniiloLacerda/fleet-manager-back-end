import { ICompany } from '@interfaces/models/company.interface';
import { model, Model, models, Schema } from 'mongoose';

export class Company {
  private _model: Model<ICompany>;

  private companySchema = new Schema(
    {
      active: {
        type: Boolean,
        required: true,
        default: true
      },
      name: {
        type: String,
        required: true,
        unique: true
      },
      cnpj: {
        type: String,
        required: false,
        unique: false
      },
      street: {
        type: String,
        required: false,
        unique: false
      },
      number: {
        type: String,
        required: false,
        unique: false
      },
      state: {
        type: String,
        required: false,
        unique: false
      },
      city: {
        type: String,
        required: false,
        unique: false
      },
      neighborhood: {
        type: String,
        required: false,
        unique: false
      }
    },
    {
      timestamps: true,
      toJSON: {
        transform: (_, ret): void => {
          ret.id = ret._id;
          delete ret._id;
          delete ret.__v;
        }
      }
    }
  );

  constructor() {
    this._model = models.Company || model<ICompany>('Company', this.companySchema);
  }

  public get model(): Model<ICompany> {
    return this._model;
  }
}
