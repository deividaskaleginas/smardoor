export interface MonitorTechnicalParams {
  kortelesLizdas: string;
  ekranas: string;
  rezoliucija: string;
  maitinimas: string;
  darbineTemperatura: string;
  dregme: string;
  matmenys: string;
}

export interface FileType {
  path: string;
  size: number;
  encoding: string;
  filename: string;
  mimetype: string;
  fieldname: string;
  destination: string;
  originalname: string;
}

export interface MonitorsValues {
  title: string;
  alt: string;
  price: string;
  monitor_description: string;
  technical_parameters: MonitorTechnicalParams;
}

export interface MonitorType {
  title: string;
  images: FileType[];
  alt: string;
  price: string;
  slug: string;
  monitor_description: string;
  technical_parameters: MonitorTechnicalParams;
  instruction: FileType[];
  videos: string[];
  technical_images: FileType[];
}
