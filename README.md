## 注意

#### android 參考 ： https://facebook.github.io/react-native/docs/signed-apk-android.html#content

 - 注意！ 在設定 gradle.properties 時，檔名，密碼都不要有多餘的空白


#### android build 失敗請在 proguard-rules.pro 的最下方加入以下設定
```
    -dontwarn java.nio.file.Files
    -dontwarn java.nio.file.Path
    -dontwarn java.nio.file.OpenOption
    -dontwarn org.codehaus.mojo.animal_sniffer.IgnoreJRERequirement
```

