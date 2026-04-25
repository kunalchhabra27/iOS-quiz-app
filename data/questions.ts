export type Question = {
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type Topic = {
  id: string;
  title: string;
  questions: Question[];
};

export const topics: Topic[] = [
  {
    id: 'swift-programming',
    title: 'Swift Programming',
    questions: [
      {
        prompt: 'What does `let` declare in Swift?',
        options: ['A mutable variable', 'A constant', 'A class', 'A protocol'],
        answerIndex: 1,
        explanation: '`let` creates an immutable constant after initialization.'
      },
      {
        prompt: 'Which keyword is used to define an enumeration?',
        options: ['enum', 'struct', 'case', 'switch'],
        answerIndex: 0,
        explanation: 'Swift uses `enum` to declare enumerations.'
      },
      {
        prompt: 'What is optional chaining used for?',
        options: [
          'Creating generic constraints',
          'Safely calling properties/methods on optional values',
          'Pattern matching tuples',
          'Converting structs into classes'
        ],
        answerIndex: 1,
        explanation: 'Optional chaining returns nil if the optional is nil instead of crashing.'
      },
      {
        prompt: 'Which statement provides exhaustive pattern matching over enum cases?',
        options: ['if', 'guard', 'switch', 'defer'],
        answerIndex: 2,
        explanation: '`switch` over enums requires all cases to be handled (or default).' 
      },
      {
        prompt: 'What does `defer` do?',
        options: [
          'Repeats a loop while condition is true',
          'Schedules code to execute before scope exits',
          'Marks unavailable APIs',
          'Defines asynchronous tasks'
        ],
        answerIndex: 1,
        explanation: '`defer` blocks run in LIFO order right before leaving scope.'
      },
      {
        prompt: 'How do you indicate a throwing function?',
        options: ['async', 'throws', 'throwing', 'try'],
        answerIndex: 1,
        explanation: 'Use `throws` in function signature and `try` when calling it.'
      },
      {
        prompt: 'What is the purpose of protocols in Swift?',
        options: [
          'Store only binary data',
          'Define a blueprint of required properties/methods',
          'Replace ARC memory management',
          'Compile UIKit storyboards'
        ],
        answerIndex: 1,
        explanation: 'Protocols define interfaces that types can conform to.'
      },
      {
        prompt: 'Which collection keeps unique values without order guarantees?',
        options: ['Array', 'Dictionary', 'Set', 'Tuple'],
        answerIndex: 2,
        explanation: 'Set stores unique hashable elements.'
      },
      {
        prompt: 'What does `guard` primarily improve?',
        options: ['Tail recursion', 'Early exit readability', 'Memory retention', 'UI rendering speed'],
        answerIndex: 1,
        explanation: '`guard` exits early when conditions fail, flattening control flow.'
      },
      {
        prompt: 'Which concept allows shared behavior implementation for protocols?',
        options: ['Extensions', 'Initializers', 'Optionals', 'Actors'],
        answerIndex: 0,
        explanation: 'Protocol extensions provide default method/property implementations.'
      }
    ]
  },
  {
    id: 'swiftui',
    title: 'SwiftUI',
    questions: [
      {
        prompt: 'Which protocol must every SwiftUI view conform to?',
        options: ['ObservableObject', 'View', 'Identifiable', 'Codable'],
        answerIndex: 1,
        explanation: 'All SwiftUI views conform to `View` and define a `body`.'
      },
      {
        prompt: 'What is `@State` used for?',
        options: ['Shared app-wide model', 'Local mutable view state', 'Dependency injection', 'Animation curves'],
        answerIndex: 1,
        explanation: '`@State` keeps local value-type state owned by a view.'
      },
      {
        prompt: 'When should you use `@StateObject`?',
        options: [
          'For constants only',
          'When the view creates and owns an ObservableObject',
          'For environment values like color scheme',
          'Inside protocols'
        ],
        answerIndex: 1,
        explanation: '`@StateObject` ensures object lifecycle survives view redraws.'
      },
      {
        prompt: 'Which container stacks views vertically?',
        options: ['HStack', 'VStack', 'ZStack', 'Group'],
        answerIndex: 1,
        explanation: '`VStack` arranges child views top-to-bottom.'
      },
      {
        prompt: 'What does `NavigationStack` provide?',
        options: ['Core Data persistence', 'Hierarchical navigation with path state', 'Gesture recognition', 'Threading primitives'],
        answerIndex: 1,
        explanation: '`NavigationStack` manages push-style navigation using data-driven paths.'
      },
      {
        prompt: 'Which modifier animates value changes declaratively?',
        options: ['onAppear', 'animation(_:value:)', 'task(id:)', 'transaction(_)'],
        answerIndex: 1,
        explanation: '`animation(_:value:)` applies animation whenever value changes.'
      },
      {
        prompt: 'What is `@EnvironmentObject` best for?',
        options: ['Function overloading', 'Passing shared observable data down many levels', 'Background URL downloads', 'Bridging Objective-C enums'],
        answerIndex: 1,
        explanation: 'It injects shared observable objects into descendant views.'
      },
      {
        prompt: 'Which view builder enables lists of dynamic data?',
        options: ['ForEach', 'Divider', 'Spacer', 'GeometryReader'],
        answerIndex: 0,
        explanation: '`ForEach` renders views from identifiable collections.'
      },
      {
        prompt: 'What is `PreviewProvider` (or #Preview) mainly for?',
        options: ['App Store deployment', 'Interactive design-time preview in Xcode', 'Unit test generation', 'Runtime logging'],
        answerIndex: 1,
        explanation: 'Previews allow iterative UI development without full app runs.'
      },
      {
        prompt: 'Which property wrapper reads values from environment?',
        options: ['@Binding', '@Environment', '@Published', '@MainActor'],
        answerIndex: 1,
        explanation: '`@Environment` accesses system or custom environment values.'
      }
    ]
  },
  {
    id: 'combine-framework',
    title: 'Combine Framework',
    questions: [
      {
        prompt: 'In Combine, a stream source is called a…',
        options: ['Observer', 'Publisher', 'Relay', 'SignalHandler'],
        answerIndex: 1,
        explanation: '`Publisher` emits values over time and can finish or fail.'
      },
      {
        prompt: 'What receives values from a Publisher?',
        options: ['Subscriber', 'Reducer', 'Coordinator', 'Executor'],
        answerIndex: 0,
        explanation: 'A `Subscriber` requests and processes values.'
      },
      {
        prompt: 'Which operator transforms each element?',
        options: ['filter', 'map', 'debounce', 'merge'],
        answerIndex: 1,
        explanation: '`map` applies a closure to every emitted value.'
      },
      {
        prompt: 'What does `sink` return?',
        options: ['AnyPublisher', 'AnyCancellable', 'PassthroughSubject', 'Future'],
        answerIndex: 1,
        explanation: 'Store `AnyCancellable` to keep the subscription alive.'
      },
      {
        prompt: 'Which subject replays the latest value to new subscribers?',
        options: ['PassthroughSubject', 'CurrentValueSubject', 'NotificationCenter.Publisher', 'Deferred'],
        answerIndex: 1,
        explanation: '`CurrentValueSubject` holds current state and replays it.'
      },
      {
        prompt: 'What does `debounce` help with?',
        options: ['Retaining cycles', 'Reducing rapid event bursts', 'JSON decoding', 'Synchronous threading'],
        answerIndex: 1,
        explanation: 'Useful for search fields to delay emissions while typing.'
      },
      {
        prompt: 'Which scheduler is common for UI updates?',
        options: ['RunLoop.main / DispatchQueue.main', 'OperationQueue.global', 'URLSession', 'TaskGroup'],
        answerIndex: 0,
        explanation: 'UI updates should be delivered on the main thread.'
      },
      {
        prompt: 'What does `eraseToAnyPublisher()` do?',
        options: ['Converts errors to never', 'Hides concrete publisher type', 'Cancels all subscriptions', 'Serializes events'],
        answerIndex: 1,
        explanation: 'Type erasure keeps APIs stable and easier to expose.'
      },
      {
        prompt: 'What is backpressure in Combine?',
        options: ['Memory leaks', 'Demand management from subscriber to publisher', 'Animation lag', 'Compiler optimization'],
        answerIndex: 1,
        explanation: 'Subscribers control how many values they can handle.'
      },
      {
        prompt: 'Which operator combines latest values from two publishers?',
        options: ['zip', 'combineLatest', 'flatMap', 'replaceNil'],
        answerIndex: 1,
        explanation: '`combineLatest` emits when either source updates after both emitted at least once.'
      }
    ]
  },
  {
    id: 'xcode',
    title: 'Xcode',
    questions: [
      {
        prompt: 'What does Product > Clean Build Folder do?',
        options: ['Deletes your repo', 'Removes derived build artifacts', 'Resets simulator', 'Updates CocoaPods'],
        answerIndex: 1,
        explanation: 'It clears built intermediates to resolve stale build issues.'
      },
      {
        prompt: 'Where do you manage signing certificates and profiles?',
        options: ['In Interface Builder', 'Target > Signing & Capabilities', 'Asset Catalog', 'Test Navigator'],
        answerIndex: 1,
        explanation: 'Code signing is configured in each target settings.'
      },
      {
        prompt: 'What is a scheme in Xcode?',
        options: ['A storyboard page', 'A set of build/run/test/archive actions', 'A Swift package', 'A simulator profile'],
        answerIndex: 1,
        explanation: 'Schemes define how and what to build/run for workflows.'
      },
      {
        prompt: 'Which navigator shows warnings and errors?',
        options: ['Issue Navigator', 'Project Navigator', 'Symbol Navigator', 'Breakpoint Navigator'],
        answerIndex: 0,
        explanation: 'Issue Navigator lists compile and analysis issues.'
      },
      {
        prompt: 'What is Instruments primarily used for?',
        options: ['Dependency injection', 'Profiling performance and memory', 'Code generation', 'Localization export only'],
        answerIndex: 1,
        explanation: 'Instruments tracks allocations, CPU, leaks, and more.'
      },
      {
        prompt: 'How can you inspect view hierarchy at runtime?',
        options: ['Git blame', 'Debug View Hierarchy', 'App Store Connect', 'Package.swift'],
        answerIndex: 1,
        explanation: 'Xcode visual debugger can inspect layered UI trees.'
      },
      {
        prompt: 'What is DerivedData?',
        options: ['UserDefaults storage', 'Folder for build intermediates and indexes', 'CloudKit cache', 'App icon assets'],
        answerIndex: 1,
        explanation: 'Deleting DerivedData can fix index/build corruption.'
      },
      {
        prompt: 'Which shortcut opens the Library panel?',
        options: ['Shift+Cmd+L', 'Cmd+B', 'Cmd+R', 'Option+Cmd+P'],
        answerIndex: 0,
        explanation: 'Shift+Cmd+L opens components/snippets library.'
      },
      {
        prompt: 'What does XCTestPlan let you do?',
        options: ['Draw Auto Layout constraints', 'Configure grouped test runs with options', 'Create provisioning profiles', 'Merge git branches'],
        answerIndex: 1,
        explanation: 'Test plans define variants and settings for test suites.'
      },
      {
        prompt: 'Which report helps inspect build timing details?',
        options: ['Build report in Report Navigator', 'Asset report', 'Organizer crashes only', 'Breakpoint logs'],
        answerIndex: 0,
        explanation: 'Report Navigator includes per-step build duration info.'
      }
    ]
  },
  {
    id: 'mvvm-clean-architecture',
    title: 'MVVM + Clean Architecture',
    questions: [
      {
        prompt: 'In MVVM, the ViewModel primarily…',
        options: ['Renders pixels directly', 'Exposes state/actions for the View', 'Persists SQLite files', 'Handles APNs push certs'],
        answerIndex: 1,
        explanation: 'ViewModel transforms domain data into presentation state.'
      },
      {
        prompt: 'Clean Architecture keeps business rules in which layer?',
        options: ['UI Layer', 'Domain Layer', 'Infrastructure Layer', 'Routing Layer'],
        answerIndex: 1,
        explanation: 'Domain layer should remain framework-independent.'
      },
      {
        prompt: 'Why use protocols between layers?',
        options: ['To increase compile time', 'To invert dependencies and ease testing', 'To replace enums', 'To avoid async code'],
        answerIndex: 1,
        explanation: 'Abstractions enable dependency inversion and mocking.'
      },
      {
        prompt: 'A use case/interactor should contain…',
        options: ['UIColor constants', 'Business-specific application logic', 'Storyboard segues', 'Console logs only'],
        answerIndex: 1,
        explanation: 'Use cases orchestrate domain logic and repositories.'
      },
      {
        prompt: 'Repository pattern is useful because it…',
        options: ['Avoids models', 'Abstracts data source details', 'Forces singletons', 'Removes async/await'],
        answerIndex: 1,
        explanation: 'Repositories hide network/db implementation choices.'
      },
      {
        prompt: 'In clean boundaries, dependencies should point…',
        options: ['Outward from domain to frameworks', 'Inward toward core/domain', 'Randomly', 'Only to UIKit'],
        answerIndex: 1,
        explanation: 'Outer layers depend on inner policies, not vice versa.'
      },
      {
        prompt: 'Where should DTO-to-domain mapping usually happen?',
        options: ['Data layer', 'View file', 'App delegate', 'Asset catalog'],
        answerIndex: 0,
        explanation: 'Data layer converts transport models to domain entities.'
      },
      {
        prompt: 'What is a key benefit of MVVM with SwiftUI?',
        options: ['No need for tests', 'Better state isolation and previewability', 'No async handling', 'No protocols needed'],
        answerIndex: 1,
        explanation: 'Separating state logic improves maintainability and testing.'
      },
      {
        prompt: 'How should ViewModel know about services?',
        options: ['Instantiate concrete APIs directly', 'Receive abstractions via dependency injection', 'Use global variables', 'Use only static methods'],
        answerIndex: 1,
        explanation: 'Injected protocols reduce coupling and improve tests.'
      },
      {
        prompt: 'What does “clean” mostly emphasize?',
        options: ['Fancy UI effects', 'Separation of concerns and testable boundaries', 'Single file apps', 'No architecture at all'],
        answerIndex: 1,
        explanation: 'It focuses on maintainable boundaries around core logic.'
      }
    ]
  },
  {
    id: 'swift-testing',
    title: 'Swift Testing',
    questions: [
      {
        prompt: 'What is the main purpose of unit tests?',
        options: ['Publish app automatically', 'Verify small pieces of logic in isolation', 'Design app icons', 'Optimize App Store metadata'],
        answerIndex: 1,
        explanation: 'Unit tests validate behavior of focused components.'
      },
      {
        prompt: 'What does Arrange-Act-Assert describe?',
        options: ['Build phases', 'A structure for readable tests', 'A signing flow', 'A release checklist'],
        answerIndex: 1,
        explanation: 'AAA organizes setup, execution, and verification.'
      },
      {
        prompt: 'Why mock dependencies in tests?',
        options: ['To hide bugs', 'To control behavior and remove external side effects', 'To increase network usage', 'To bypass compiler checks'],
        answerIndex: 1,
        explanation: 'Mocks make tests deterministic and faster.'
      },
      {
        prompt: 'What is snapshot testing commonly used for?',
        options: ['Testing API auth tokens', 'Verifying UI output over time', 'Measuring memory leaks only', 'Replacing integration tests entirely'],
        answerIndex: 1,
        explanation: 'Snapshots catch unexpected visual or serialized output changes.'
      },
      {
        prompt: 'When should async tests use expectations or async/await?',
        options: ['Never', 'When validating asynchronous operations', 'Only for UI colors', 'Only in release builds'],
        answerIndex: 1,
        explanation: 'Async tools ensure tests wait for eventual results safely.'
      },
      {
        prompt: 'What makes a test flaky?',
        options: ['Deterministic setup', 'Non-deterministic timing/shared state', 'Simple pure functions', 'Small test scope'],
        answerIndex: 1,
        explanation: 'Flaky tests fail intermittently due to unstable conditions.'
      },
      {
        prompt: 'Why keep tests independent?',
        options: ['To force execution order', 'To allow parallel runs and reliable outcomes', 'To increase coupling', 'To reduce coverage'],
        answerIndex: 1,
        explanation: 'Independent tests don’t rely on hidden side effects.'
      },
      {
        prompt: 'What is code coverage?',
        options: ['CPU usage of tests', 'Percentage of code executed by tests', 'Test run duration', 'Binary size'],
        answerIndex: 1,
        explanation: 'Coverage indicates exercised lines/branches, not quality alone.'
      },
      {
        prompt: 'A good test name should…',
        options: ['Be cryptic and short', 'Describe behavior and expected outcome', 'Match file name only', 'Use random IDs'],
        answerIndex: 1,
        explanation: 'Clear names document intent and aid debugging.'
      },
      {
        prompt: 'Integration tests differ from unit tests because they…',
        options: ['Always run faster', 'Verify interactions among multiple components', 'Never use real implementations', 'Cannot fail'],
        answerIndex: 1,
        explanation: 'Integration tests validate cooperation between subsystems.'
      }
    ]
  },
  {
    id: 'swift-data',
    title: 'SwiftData',
    questions: [
      {
        prompt: 'SwiftData models are commonly marked with which macro?',
        options: ['@Observable', '@Model', '@State', '@Entity'],
        answerIndex: 1,
        explanation: '`@Model` identifies persistable types in SwiftData.'
      },
      {
        prompt: 'What does ModelContainer represent?',
        options: ['A UI layout group', 'Storage stack/configuration for models', 'A Combine scheduler', 'A build scheme'],
        answerIndex: 1,
        explanation: 'ModelContainer manages persistence configuration and stores.'
      },
      {
        prompt: 'Which context is used for inserts/deletes/saves?',
        options: ['URLSession', 'ModelContext', 'AnimationContext', 'TransactionGroup'],
        answerIndex: 1,
        explanation: 'ModelContext is the working area for CRUD operations.'
      },
      {
        prompt: 'What does `@Query` provide in SwiftUI?',
        options: ['Compile-time macro expansion', 'Live-updating fetched model collections', 'Navigation path serialization', 'Remote push updates'],
        answerIndex: 1,
        explanation: '`@Query` binds fetch results directly to SwiftUI views.'
      },
      {
        prompt: 'Why define relationships in models?',
        options: ['To change app icon', 'To express links like one-to-many between entities', 'To disable persistence', 'To avoid sorting'],
        answerIndex: 1,
        explanation: 'Relationships model associations among persisted objects.'
      },
      {
        prompt: 'When should you call `modelContext.save()`?',
        options: ['Only at app launch', 'After mutating data when explicit save is needed', 'Before creating objects', 'Never'],
        answerIndex: 1,
        explanation: 'Saving persists pending context changes to store.'
      },
      {
        prompt: 'What can predicates and sort descriptors do?',
        options: ['Configure certificates', 'Filter and order fetched data', 'Create storyboard segues', 'Improve battery calibration'],
        answerIndex: 1,
        explanation: 'They narrow and organize query results.'
      },
      {
        prompt: 'A migration is needed when…',
        options: ['Changing persistent model schema over app versions', 'Switching device orientation', 'Renaming variables in comments', 'Enabling dark mode'],
        answerIndex: 0,
        explanation: 'Schema changes across releases may require migration steps.'
      },
      {
        prompt: 'What is a common architecture practice with SwiftData?',
        options: ['Bind model types directly in every view', 'Encapsulate persistence access behind repositories/services', 'Disable previews', 'Store everything in UserDefaults'],
        answerIndex: 1,
        explanation: 'Abstraction keeps domain/UI decoupled from storage details.'
      },
      {
        prompt: 'How does SwiftData pair well with SwiftUI?',
        options: ['Manual UI refresh for every change', 'Reactive updates when model data changes', 'No threading concerns ever', 'No need for model definitions'],
        answerIndex: 1,
        explanation: 'Data changes can flow into view updates declaratively.'
      }
    ]
  }
];
