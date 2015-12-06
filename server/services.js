/**
 * Created by diegopc86 on 05/12/15.
 */

ServiceConfiguration.configurations.upsert(
    { service: 'facebook'},
    {
        $set: {
            appId: '155513894539819',
            secret: 'ea11f1ff7dc69f63dd99ca35670bb27f'
        }
    }
);