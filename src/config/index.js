import base from 'src/config/base';
import prd from 'src/config/prd';
import dev from 'src/config/dev';
import test from 'src/config/test';


export default {
  ...base,
  ...{
    prd,
    dev,
    test,
  }[process.env.NODE_ENV || 'prd'],
};
