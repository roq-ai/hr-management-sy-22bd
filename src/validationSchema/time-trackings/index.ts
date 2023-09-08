import * as yup from 'yup';

export const timeTrackingValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  total_hours: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
