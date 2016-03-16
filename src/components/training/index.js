import React, {
  PropTypes,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  WebView,
} from 'react-native';


export const TrainingDetail = function TrainingDetail({ module }) {
  return (
    <View style={{ flex: 1 }}>
      <Text>{ module.title }</Text>
      <WebView source={{ uri: module.url }} style={{ flex: 1 }} />
    </View>
  );
};
TrainingDetail.propTypes = {
  module: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

const TrainingRow = function TrainingRow({ module, onPress }) {
  const {
    id,
    title,
  } = module;
  return (
      <TouchableOpacity key={id} onPress={onPress} style={{ height: 150, backgroundColor: 'red' }}>
        <Text>{title}</Text>
      </TouchableOpacity>
  );
};
TrainingRow.propTypes = {
  module: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

export const TrainingList = function TrainingList({
  modules = [],
  onRowPress,
}) {
  return (
    <ScrollView>
      {modules.map((module, i) =>
        <TrainingRow
          key={i}
          module={module}
          onPress={() => { onRowPress(module) }}
        />
      )}
    </ScrollView>
  );
};
TrainingList.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  onRowPress: PropTypes.func.isRequired,
};
