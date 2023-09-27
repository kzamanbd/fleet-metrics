import 'simplebar';
import './config';
import './drawer';
import './dropdown';
import './modal';
import './ripples';
import './vertical-menu';

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

// sweet alert2
import Swal from 'sweetalert2';
window.Swal = Swal;

// initialize quill editor
import Quill from 'quill';
window.Quill = Quill;

// initialize sortable js
import { MultiDrag, Sortable, Swap } from 'sortablejs';
window.Sortable = Sortable;
Sortable.mount(new MultiDrag());
Sortable.mount(new Swap());

// apexcharts
import ApexCharts from 'apexcharts';
window.ApexCharts = ApexCharts;

// file upload with preview
import { FileUploadWithPreview } from 'file-upload-with-preview';
window.FileUploadWithPreview = FileUploadWithPreview;

// clipboard
import ClipboardJS from 'clipboard';
window.ClipboardJS = ClipboardJS;

// flatpickr
import flatpickr from 'flatpickr';
window.flatpickr = flatpickr;

// simple data tables
import { DataTable, exportCSV, exportJSON, exportTXT } from 'simple-datatables';
window.DataTable = DataTable;
window.DataTableExportCSV = exportCSV;
window.DataTableExportJSON = exportJSON;
window.DataTableExportTXT = exportTXT;
