import { connect } from 'react-redux';
import CategoryList from 'src/views/CategoryList';
import { getCategories } from 'src/store/helpers';
import { chooseCallNoteCategory } from 'src/actions/callNotes';
import { dismissScreen } from 'src/actions/navigation';


export const mapStateToProps = state => ({
  categories: getCategories(state, { omitHidden: true }),
});


export const mapDispatchToProps = {
  onCategoryPress: chooseCallNoteCategory,
  onBackPress: dismissScreen,
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
